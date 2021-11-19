const baseUrl = 'http://localhost:5500/api/posts';
const timeLineUrl = 'timeline/all';
const userPostsUrl = '/user-posts';

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
