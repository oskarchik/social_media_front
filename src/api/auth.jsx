const baseApiUrl =
  process.env.NODE_ENV === 'development'
    ? `${process.env.REACT_APP_API_URL_DEV}/auth`
    : 'https://node-social-face.herokuapp.com/api';
// `
// ${process.env.REACT_APP_API_URL}/api/auth`;
console.log('baseUrl', baseApiUrl);

const signUpUrl = `${baseApiUrl}/signup`;
const signInUrl = `${baseApiUrl}/signin`;
const signOutUrl = `${baseApiUrl}/signout`;
const checkSessionUrl = `${baseApiUrl}/check-session`;

const frontUrl = process.env === 'development' ? 'http://localhost:3000' : process.env.REACT_APP_FRONT_URL;

export const signUp = async (userData) => {
  const request = await fetch(signUpUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(userData),
  });

  const response = await request.json();

  return response;
};

export const signIn = async (userData) => {
  const request = await fetch(signInUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(userData),
  });

  const response = await request.json();

  return response;
};
export const signOut = async () => {
  const request = await fetch(signOutUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
  });

  const res = request.json();

  return res;
};

export const checkSession = async () => {
  const request = await fetch(checkSessionUrl, {
    method: 'GET',
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': frontUrl,
    },
    credentials: 'include',
  });
  const res = request.json();

  return res;
};
