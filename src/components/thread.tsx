import { useMemo } from 'react';
import { AiChat, ConversationOptions, ComposerOptions, DisplayOptions, MessageOptions } from '@nlux/react';

import '@nlux/themes/nova.css';
import './thread.css';

import { nlux } from '../assistants/gpt4Adapter'; // Import nlux
import { personas } from '../assistants/gpt4Personas'; // Import personas

export interface ThreadProps {
    displayOptions?: DisplayOptions;
    composerOptions?: ComposerOptions;
    conversationOptions?: ConversationOptions;
    messageOptions?: MessageOptions;
}

const Thread: React.FC<ThreadProps> = ({
    displayOptions,
    composerOptions,
    conversationOptions,
    messageOptions,
}) => {

    const adapter = useMemo(() => nlux, []);

    const defaultDisplayOptions: DisplayOptions = {
        colorScheme: 'auto',
    };

    const defaultComposerOptions: ComposerOptions = {
        autoFocus: true,
        disableSubmitButton: false,
        placeholder: 'Tell me about your Berlin rental problems...',
        submitShortcut: 'CommandEnter',
    };

    const defaultConversationOptions: ConversationOptions = {
        layout: 'list',
        autoScroll: true,
        showWelcomeMessage: true,
        conversationStarters: [
            { prompt: 'Write a poem using markdown and emojis' },
            { prompt: 'What is your name?' },
            { prompt: 'What is your favorite color?' },
        ],
    };

    const defaultMessageOptions: MessageOptions = {
        markdownLinkTarget: 'blank',
        showCodeBlockCopyButton: true,
        skipStreamingAnimation: false,
        streamingAnimationSpeed: 100,
        // syntaxHighlighter: highlighter,
        waitTimeBeforeStreamCompletion: 5000,
    };

    return (
        <div id="composer">
            <AiChat
                className="theme-flatemate"
                adapter={adapter}
                composerOptions={composerOptions || defaultComposerOptions}
                personaOptions={personas}
                conversationOptions={conversationOptions || defaultConversationOptions}
                messageOptions={messageOptions || defaultMessageOptions}
                displayOptions={displayOptions || defaultDisplayOptions}
            />
        </div>
    );
};

export default Thread;