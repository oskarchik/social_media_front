const baseUrl = 'http://localhost:5500/api/';

const allUsers = 'users';

export const getAllUsers = async () => {
  const req = await fetch(`${baseUrl}${allUsers}`, {
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
