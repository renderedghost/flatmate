import { useUnsafeChatAdapter, ChatAdapterOptions } from '@nlux/openai-react';

const adapterOptions: ChatAdapterOptions = {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
    model: 'gpt-3.5-turbo',
    systemMessage: 'Act as a helpful assistant and be funny and engaging.',
};

export const useChatAdapter = () => {
    return useUnsafeChatAdapter(adapterOptions);
};