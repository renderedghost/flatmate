import React from 'react';
import { AiChat } from '@nlux/react';
import { useChatAdapter } from '../services/assistant';
import TextInputChat from './chatText';
import VoiceInputChat from './chatVoice';
import PreloadedPrompts from './chatPrompts';
import FileUpload from './chatUpload';
import ConversationSummary from './chatSummary';

const Chat: React.FC = () => {
    const openAiAdapter = useChatAdapter();

    return (
        <div>
            <AiChat 
                adapter={openAiAdapter} 
                composerOptions={{ placeholder: 'How can I help you today?' }} 
            />
            <TextInputChat />
            <VoiceInputChat />
            <PreloadedPrompts />
            <FileUpload />
            <ConversationSummary />
        </div>
    );
};

export default Chat;