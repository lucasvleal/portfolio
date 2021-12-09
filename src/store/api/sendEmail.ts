const API_ENDPOINT = '/api/email';
const method = 'POST';
const headers = {
    'Accept': 'application/json,text/plain, */*',
    'Content-Type': 'application/json'
};

export const sendEmail = async (body: string): Promise<boolean> => {
    const data = { emailBody: body };

    const response = await fetch(API_ENDPOINT, {
        method,
        headers,
        body: JSON.stringify(data),
    });

    if (!response.ok) {
      return false;
    }

    return true;
}