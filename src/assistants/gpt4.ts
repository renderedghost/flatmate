import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { join } from 'path';
import WebSocket, { WebSocketServer } from 'ws';

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    throw new Error('Missing OPENAI_API_KEY in environment variables');
}

interface Assistant {
    id: string;
    name: string;
    created_at: string;
    model: string;
    instructions: string;
}

interface Thread {
    id: string;
    assistant_id: string;
    created_at: string;
    messages: string[];
}

interface LogProbs {
    tokens: string[];
    token_logprobs: number[];
    top_logprobs: Array<Record<string, number>>;
    text_offset: number[];
}

interface Choice {
    text: string;
    index: number;
    logprobs: LogProbs;
    finish_reason: string;
}

interface Usage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
}

interface OpenAIResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Choice[];
    usage: Usage;
}

const createAssistant = async (): Promise<Assistant> => {
    const instructionsPath = join(__dirname, 'gpt4instructions.md');
    let instructions = readFileSync(instructionsPath, 'utf-8');

    // Add additional context to the instructions
    instructions += "\n\n# Context\n";
    instructions += "You are a highly accurate customer support assistant for FlatMate. Your role is to assist users with their rental problems in Berlin. Be concise, polite, and provide accurate information. Always prioritize resolving the user's issue efficiently.";

    const response = await fetch('https://api.openai.com/v1/assistants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            name: 'FlatMate',
            instructions: instructions,
            model: 'gpt-4',
            parameters: {
                top_p: 0.95,
                temperature: 0.3
            }
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to create assistant');
    }

    const data = await response.json();
    return data as Assistant;
};

const createThread = async (assistantId: string): Promise<Thread> => {
    const response = await fetch(`https://api.openai.com/v1/assistants/${assistantId}/threads`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
    });
    if (!response.ok) {
        throw new Error('Failed to create thread');
    }
    const data = await response.json();
    return data as Thread;
};

const addMessage = async (assistantId: string, threadId: string, message: string): Promise<void> => {
    const response = await fetch(`https://api.openai.com/v1/assistants/${assistantId}/threads/${threadId}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ content: message }),
    });
    if (!response.ok) {
        throw new Error('Failed to add message');
    }
};

const runAssistant = async (assistantId: string, threadId: string): Promise<OpenAIResponse> => {
    const response = await fetch(`https://api.openai.com/v1/assistants/${assistantId}/threads/${threadId}/run`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
    });
    if (!response.ok) {
        throw new Error('Failed to run assistant');
    }
    const data = await response.json();
    return data as OpenAIResponse;
};

// WebSocket server to handle streaming responses
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
    console.log('Client connected');

    ws.on('message', async (message: WebSocket.Data) => {
        console.log(`Received message => ${message}`);
        const userMessage = JSON.parse(message.toString()).message;

        try {
            const assistant = await createAssistant();
            const thread = await createThread(assistant.id);
            await addMessage(assistant.id, thread.id, userMessage);
            const response = await runAssistant(assistant.id, thread.id);

            ws.send(JSON.stringify(response));

            ws.close();
        } catch (error) {
            console.error('Error:', error);
            ws.send(JSON.stringify({ error: 'Failed to fetch data from OpenAI' }));
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

export { createAssistant, createThread, addMessage, runAssistant };