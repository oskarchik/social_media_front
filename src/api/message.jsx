const baseUrl =
  process.env.NODE_ENV === 'development'
    ? `${process.env.REACT_APP_API_URL_DEV}/messages`
    : `
    ${process.env.REACT_APP_API_URL_PROD}/messages`;

export const getMessages = async (conversationId) => {
  const request = await fetch(`${baseUrl}${conversationId}`, {
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

export const newMessage = async (data) => {
  const request = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  const response = await request.json();

  return response;
};
