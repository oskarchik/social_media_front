const baseUrl =
  process.env.NODE_ENV === 'development'
    ? `${process.env.REACT_APP_API_URL_DEV}/comments`
    : `
    ${process.env.REACT_APP_API_URL_PROD}/comments`;
const likeUnlikeCommentUrl = '/like-comment';
const commentUrl = '/comment';

export const likeUnlikeComment = async (data) => {
  const request = await fetch(`${baseUrl}/${data.commentId}${likeUnlikeCommentUrl}`, {
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

export const sendComment = async (data) => {
  const request = await fetch(`${baseUrl}/${data.commentId}${commentUrl}`, {
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

export const deleteComment = async (data) => {
  const request = await fetch(`${baseUrl}/${data.commentId}`, {
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
