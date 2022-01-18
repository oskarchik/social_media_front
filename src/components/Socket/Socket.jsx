import { io } from 'socket.io-client';

export const socket = io('https://social-face.netlify.app', {
  withCredentials: true,
  forceNew: true,
  extraHeaders: {
    'Access-Control-Allow-Origin': '*',
  },
});
