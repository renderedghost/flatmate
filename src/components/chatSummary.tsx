import React, { useState } from 'react';
import { generateSummary } from '../services/summary';

const ConversationSummary: React.FC = () => {
    const [summary, setSummary] = useState<string | null>(null);

    const handleGenerateSummary = async () => {
        const conversation = ""; // Replace with actual conversation data
        try {
            const generatedSummary = await generateSummary(conversation);
            setSummary(generatedSummary);
        } catch (error) {
            console.error('Summary generation failed:', error);
        }
    };

    return (
        <div>
            <button onClick={handleGenerateSummary}>Generate Summary</button>
            {summary && (
                <div>
                    <h2>Conversation Summary</h2>
                    <p>{summary}</p>
                </div>
            )}
        </div>
    );
};

export default ConversationSummary;