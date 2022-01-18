const baseUrl = '//node-social-face.herokuapp.com/api/users/';

const acceptRequestUrl = '/accept-contact';
const declineRequestUrl = '/decline-contact';
const removeContactUrl = '/remove-contact';
const requestContactUrl = '/request-contact';
const removeMentionsUrl = '/mentions';
const updateAvatarUrl = '/upload-avatar';
const updateCoverUrl = '/upload-cover';

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

export const updateAvatar = async ({ data, userId }) => {
  const request = await fetch(`${baseUrl}${userId}${updateAvatarUrl}`, {
    method: 'PUT',
    credentials: 'include',
    body: data,
  });

  const response = request.json();

  return response;
};
export const updateCover = async ({ data, userId }) => {
  const request = await fetch(`${baseUrl}${userId}${updateCoverUrl}`, {
    method: 'PUT',
    credentials: 'include',
    body: data,
  });

  const response = request.json();

  return response;
};
