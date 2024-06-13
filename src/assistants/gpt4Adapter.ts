import { ChatAdapter, StreamingAdapterObserver } from '@nlux/core';
import WebSocket, { MessageEvent } from 'ws';

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
            observer.next(data); // Notify observer of new data
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