import { io } from 'socket.io-client';

export const socket = io('ws://node-social-face.herokuapp.com/', {
  withCredentials: true,
  forceNew: true,
});
