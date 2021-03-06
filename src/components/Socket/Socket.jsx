import { io } from 'socket.io-client';

export const socketUrl =
  process.env.NODE_ENV === 'development'
    ? `${process.env.REACT_APP_SOCKET_URL_DEV}`
    : 'https://node-social-face.herokuapp.com';

export const socket = io(socketUrl, {
  withCredentials: true,
  forceNew: true,
  extraHeaders: {
    'Access-Control-Allow-Origin': '*',
  },
});
