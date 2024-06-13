// api.ts
export const postRequest = async <TRequest, TResponse>(url: string, body: TRequest): Promise<TResponse> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error('API request failed');
    }

    const data: TResponse = await response.json();
    return data;
};