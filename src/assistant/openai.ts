import fetch, { Response } from 'node-fetch'; // Importing Response from node-fetch to address type issues
import fs from 'fs/promises'; // Using promises version of fs for async/await support
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
    throw new Error('Missing VITE_OPENAI_API_KEY in environment variables');
}

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
};

const handleApiResponse = async (response: Response) => { // Now explicitly using Response from node-fetch
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
    }
    return response.json();
};

const createAssistant = async () => {
    // Path to the markdown file
    const filePath = './config/instructions.md';
    
    try {
        // Read markdown content from the file
        const markdownInstructions = await fs.readFile(filePath, { encoding: 'utf8' });
        
        // Make the API call to create the assistant
        const response = await fetch('https://api.openai.com/v1/assistants', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                name: 'FlatMate',
                instructions: markdownInstructions,
                model: 'gpt-4',
                settings: {
                    temperature: 0.7,
                    top_p: 0.9,
                },
            }),
        });

        return handleApiResponse(response);
    } catch (error) {
        console.error('Error creating assistant:', error);
        throw error; // Rethrow the error after logging it
    }
};

const createThread = async (assistantId: string) => {
    const response = await fetch(`https://api.openai.com/v1/assistants/${assistantId}/threads`, {
        method: 'POST',
        headers,
    });
    return handleApiResponse(response);
};

const addMessage = async (assistantId: string, threadId: string, message: string) => {
    const response = await fetch(`https://api.openai.com/v1/assistants/${assistantId}/threads/${threadId}/messages`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ content: message }),
    });
    return handleApiResponse(response);
};

const runAssistant = async (assistantId: string, threadId: string) => {
    const response = await fetch(`https://api.openai.com/v1/assistants/${assistantId}/threads/${threadId}/run`, {
        method: 'POST',
        headers,
    });
    return handleApiResponse(response);
};

export { createAssistant, createThread, addMessage, runAssistant };