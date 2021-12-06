const baseUrl = 'http://localhost:5500/api/conversations/';

export const getUserConversations = async (userId) => {
  const request = await fetch(`${baseUrl}${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
  });

  const response = await request.json();

  return response;
};
