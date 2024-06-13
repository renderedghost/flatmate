export const generateSummary = async (conversation: string) => {
    const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ conversation }),
    });

    if (!response.ok) {
        throw new Error('Summary generation failed');
    }

    const data = await response.json();
    return data.summary;
};