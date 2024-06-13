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
    // Add other necessary fields here
}

interface Thread {
    id: string;
    // Add other necessary fields here
}

interface OpenAIResponse {
    // Define the structure based on the expected response
    // Example fields (replace with actual fields as needed):
    message?: string;
    // Add other fields here
}

const createAssistant = async (): Promise<Assistant> => {
    const instructionsPath = join(__dirname, 'gpt4instructions.md');
    const instructions = readFileSync(instructionsPath, 'utf-8');

    const response = await fetch('https://api.openai.com/v1/assistants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            name: 'FlatMate',
            instructions: instructions,
            model: 'gpt-3.5-turbo',
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