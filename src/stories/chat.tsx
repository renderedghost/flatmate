import {AiChat} from '@nlux/react';
import '@nlux/themes/nova.css';
import { nlux } from '../assistants/gpt4Adapter'; // Import nlux
import {personas} from '../assistants/gpt4Personas'; // Import personas

const Chat = () => {
    return (
        <AiChat
            adapter={nlux}
            personaOptions={personas}
            displayOptions={{colorScheme: 'dark'}}
        />
    );
};

export default Chat;