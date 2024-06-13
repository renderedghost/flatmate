import {useMemo} from 'react';
import {AiChat, ConversationOptions, ComposerOptions, DisplayOptions, MessageOptions} from '@nlux/react';

import '@nlux/themes/nova.css';
import { nlux } from '../assistants/gpt4Adapter'; // Import nlux
import {personas} from '../assistants/gpt4Personas'; // Import personas

// import {highlighter} from '@nlux/highlighter';
// import '@nlux/highlighter/dark-theme.css';

const Composer = () => {

    const adapter = useMemo(() => nlux, []);

    const displayOptions: DisplayOptions = {
        themeId: 'nova',
        colorScheme: 'auto'
    };

    const composerOptions: ComposerOptions = {
        autoFocus: true,
        disableSubmitButton: false,
        placeholder: 'Tell me about your Berlin rental problems...',
        submitShortcut: 'CommandEnter'
    };

    const conversationOptions: ConversationOptions = {
        layout: 'list',
        autoScroll: true,
        showWelcomeMessage: true,
        conversationStarters: [
            {prompt: 'Write a poem using markdown and emojis'},
            {prompt: 'What is your name?'},
            {prompt: 'What is your favorite color?'}
        ]
    };

    const messageOptions: MessageOptions = {
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
                adapter={adapter}
                composerOptions={composerOptions}
                personaOptions={personas}
                conversationOptions={conversationOptions}
                messageOptions={messageOptions}
                displayOptions={displayOptions}
                />
        </div>
    );
};

export default Composer;