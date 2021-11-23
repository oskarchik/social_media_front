const baseUrl = 'http://localhost:5500/api/';
const signUpUrl = `${baseUrl}auth/signup`;
const signInUrl = `${baseUrl}auth/signin`;
const signOutUrl = `${baseUrl}auth/signout`;
const checkSessionUrl = `${baseUrl}auth/check-session`;

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
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
  });
  const res = req.json();

  return res;
};
