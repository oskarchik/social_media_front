import { io } from 'socket.io-client';

<<<<<<< HEAD
export const socket = io('ws:https://node-social-face.herokuapp.com/', {
=======
export const socketUrl =
  process.env.NODE_ENV === 'development'
    ? `${process.env.REACT_APP_SOCKET_URL_DEV}`
    : `
    ${process.env.REACT_APP_API_URL_PROD}`;

export const socket = io(socketUrl, {
>>>>>>> fix-refactor
  withCredentials: true,
  forceNew: true,
  extraHeaders: {
    'Access-Control-Allow-Origin': '*',
  },
});
