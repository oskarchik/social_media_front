import { io } from 'socket.io-client';

export const socketUrl =
  process.env.NODE_ENV === 'development'
    ? `${process.env.REACT_APP_SOCKET_URL_DEV}`
    : `
    ${process.env.REACT_APP_SOCKET_URL}`;
console.log(process.env.REACT_APP_SOCKET_URL);
console.log(socketUrl);

export const socket = io('https://social-face.netlify.app', {
  withCredentials: true,
  forceNew: true,
  extraHeaders: {
    'Access-Control-Allow-Origin': '*',
  },
});
