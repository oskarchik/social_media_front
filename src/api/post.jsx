const baseUrl = 'https://node-social-face.herokuapp.com/api/posts';
const timeLineUrl = 'timeline/all';
const userPostsUrl = '/user-posts';
const commentAPostUrl = 'https://node-social-face.herokuapp.com/api/comments/';
const likesPostUrl = '/likes';
const sharePostUrl = '/share';

export const getTimeLine = async (id) => {
  const req = await fetch(`${baseUrl}/${id}/${timeLineUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
  });

  const res = await req.json();

  return res;
};

export const getUserPosts = async (id) => {
  const req = await fetch(`${baseUrl}${userPostsUrl}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
  });

  const res = await req.json();

  return res;
};

export const getPostById = async (id) => {
  const req = await fetch(`${baseUrl}${userPostsUrl}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
  });

  const res = await req.json();

  return res;
};

export const commentPost = async (data) => {
  const request = await fetch(`${commentAPostUrl}/${data.userId}`, {
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

export const handlePostsLikes = async (data) => {
  const request = await fetch(`${baseUrl}/${data.postId}${likesPostUrl}`, {
    method: 'PUT',
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

export const deletePost = async (data) => {
  const request = await fetch(`${baseUrl}/${data.postId}`, {
    method: 'DELETE',
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

export const createPost = async (data) => {
  const request = await fetch(`${baseUrl}`, {
    method: 'POST',
    credentials: 'include',
    body: data,
  });
  const response = await request.json();

  return response;
};

export const updatePost = async (data) => {
  const request = await fetch(`${baseUrl}/${data.postId}`, {
    method: 'PUT',
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

export const sharePost = async (data) => {
  const request = await fetch(`${baseUrl}${sharePostUrl}`, {
    method: 'PUT',
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
