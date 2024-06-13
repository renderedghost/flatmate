import { Request, Response } from 'express';
import { createAssistant, createThread, addMessage, runAssistant } from '../assistants/gpt4Backend';

// Handler for creating an assistant
export const createAssistantHandler = async (_req: Request, res: Response) => {
    try {
        const assistant = await createAssistant();
        res.json(assistant);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        } else {
            res.status(500).send('An unknown error occurred.');
        }
    }
};

// Handler for creating a thread
export const createThreadHandler = async (req: Request, res: Response) => {
    const { assistantId } = req.body;
    try {
        const thread = await createThread(assistantId);
        res.json(thread);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        } else {
            res.status(500).send('An unknown error occurred.');
        }
    }
};

// Handler for adding a message
export const addMessageHandler = async (req: Request, res: Response) => {
    const { assistantId, threadId, message } = req.body;
    try {
        const msg = await addMessage(assistantId, threadId, message);
        res.json(msg);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        } else {
            res.status(500).send('An unknown error occurred.');
        }
    }
};

// Handler for running the assistant
export const runAssistantHandler = async (req: Request, res: Response) => {
    const { assistantId, threadId } = req.body;
    try {
        const response = await runAssistant(assistantId, threadId);
        res.json(response);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        } else {
            res.status(500).send('An unknown error occurred.');
        }
    }
};