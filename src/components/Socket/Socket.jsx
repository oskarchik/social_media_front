import { io } from 'socket.io-client';

export const socket = io('https://node-social-face.herokuapp.com/', {
  withCredentials: true,
  forceNew: true,
  extraHeaders: {
    'Access-Control-Allow-Origin': '*',
  },
});
