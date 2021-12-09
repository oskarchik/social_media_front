const baseUrl = 'http://localhost:5500/api/conversations/';
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
