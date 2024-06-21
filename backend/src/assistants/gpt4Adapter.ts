import { ChatAdapter, StreamingAdapterObserver } from '@nlux/core';
import WebSocket, { MessageEvent } from 'ws';
import { OpenAIResponse } from './gpt4';

export const nlux: ChatAdapter = {
    streamText: (message: string, observer: StreamingAdapterObserver): void => {
        const socket = new WebSocket('ws://localhost:8080'); // Ensure the URL matches your WebSocket server

        // Handle WebSocket connection open event
        socket.onopen = () => {
            // Send the initial message to the WebSocket server
            socket.send(JSON.stringify({ message }));
        };

        // Handle incoming messages from the WebSocket server
        socket.onmessage = (event: MessageEvent) => {
            const data = event.data.toString(); // Convert Buffer to string
            try {
                const response: OpenAIResponse = JSON.parse(data);
                if (response.choices && response.choices.length > 0) {
                    observer.next(response.choices[0].text); // Use the text field from the first choice
                } else {
                    observer.error(new Error('No choices returned in the response'));
                }
            } catch (err) {
                observer.error(err as Error); // Ensure the error is of type Error
            }
        };

        // Handle WebSocket connection close event
        socket.onclose = () => {
            observer.complete(); // Notify observer that the stream is complete
        };

        // Handle WebSocket errors
        socket.onerror = (event: WebSocket.ErrorEvent) => {
            const customError: Error = {
                name: event.error.name,
                message: event.error.message,
                stack: event.error.stack
            };
            observer.error(customError); // Notify observer of an error
        };
    }
};