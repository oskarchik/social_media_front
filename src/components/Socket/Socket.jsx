import { io } from 'socket.io-client';

export const socket = io('ws://localhost:5500', {
  withCredentials: true,
  forceNew: true,
});
