const baseUrl = 'http://localhost:5500/api/users/';

const acceptRequestUrl = '/accept-contact';
const declineRequestUrl = '/decline-contact';
const removeContactUrl = '/remove-contact';
const requestContactUrl = '/request-contact';
const removeMentionsUrl = '/mentions';

export const getAllUsers = async () => {
  const req = await fetch(`${baseUrl}`, {
    method: 'GET',
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
  });

  const res = req.json();

  return res;
};
export const acceptRequest = async (data) => {
  const req = await fetch(`${baseUrl}${data.userId}${acceptRequestUrl}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  const res = req.json();

  return res;
};

export const declineRequest = async (data) => {
  const req = await fetch(`${baseUrl}${data.userId}${declineRequestUrl}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  const res = req.json();

  return res;
};

export const removeContact = async (data) => {
  const req = await fetch(`${baseUrl}${data.userId}${removeContactUrl}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  const res = req.json();

  return res;
};
export const sendContactRequest = async (data) => {
  const req = await fetch(`${baseUrl}${data.userId}${requestContactUrl}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  const res = req.json();

  return res;
};

export const removeMention = async (data) => {
  const request = await fetch(`${baseUrl}${data.userId}${removeMentionsUrl}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  const response = request.json();

  return response;
};
