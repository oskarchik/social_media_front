const baseApiUrl =
  process.env.NODE_ENV === 'development'
    ? `${process.env.REACT_APP_API_URL_DEV}/auth`
    : `
    ${process.env.REACT_APP_API_URL_PROD}/auth`;

const signUpUrl = `${baseApiUrl}/signup`;
const signInUrl = `${baseApiUrl}/signin`;
const signOutUrl = `${baseApiUrl}/signout`;
const checkSessionUrl = `${baseApiUrl}/check-session`;

const frontUrl = process.env === 'development' ? 'http://localhost:3000' : process.env.REACT_APP_FRONT_URL;

export const signUp = async (userData) => {
  const req = await fetch(signUpUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(userData),
  });

  const resp = await req.json();

  return resp;
};

export const signIn = async (userData) => {
  const req = await fetch(signInUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(userData),
  });

  const resp = await req.json();

  return resp;
};
export const signOut = async () => {
  const req = await fetch(signOutUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
  });

  const res = req.json();

  return res;
};

export const checkSession = async () => {
  const req = await fetch(checkSessionUrl, {
    method: 'GET',
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': frontUrl,
    },
    credentials: 'include',
  });
  const res = req.json();

  return res;
};
