const baseUrl =
  process.env.NODE_ENV === 'development'
    ? `${process.env.REACT_APP_API_URL_DEV}/conversations`
    : `
    ${process.env.REACT_APP_API_URL_PROD}/conversations`;
const conversationByMembersUrl = 'find/';

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

export const getConversationsByMembers = async (user1, user2) => {
  const request = await fetch(`${baseUrl}${conversationByMembersUrl}${user1}/${user2}`, {
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
export const createConversation = async (user1, user2) => {
  const data = {
    senderId: user1,
    receiverId: user2,
  };
  const request = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(),
  });

  const response = await request.json();

  return response;
};
