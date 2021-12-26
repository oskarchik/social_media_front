import { current } from '@reduxjs/toolkit';
import { setAutoFreeze } from '@reduxjs/toolkit/node_modules/immer';
import { set } from 'draft-js/lib/DefaultDraftBlockRenderMap';
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { getUserConversations } from '../api/conversation';

export const useWebSocket = () => {
  const { user } = useSelector((state) => state.auth.user);
  const socket = useRef();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [newMessage, setNewMessage] = useState(null);
  // const [message, setMessage] = useState(null);

  // const sendMessage = (userId, receiverId, text) => {
  //   socket.current.emit('sendMessage', {
  //     senderId: userId,
  //     receiverId,
  //     text,
  //   });
  // };

  useEffect(() => {
    socket.current = io('ws://localhost:5500', {
      withCredentials: true,
    });
    // socket.current?.on('getMessage', (data) => {
    //   setNewMessage({
    //     sender: data.senderId,
    //     text: data.text,
    //     createdAt: Date.now(),
    //   });
    // });
  }, [socket]);

  useEffect(() => {
    socket.current?.emit('addUser', user._id);
    socket.current?.on('getUsers', (users) => {
      setOnlineUsers(user.contacts.filter((contact) => users.some((user) => user.userId === contact._id)));
    });
    // socket.current?.on('getMessage', (data) => {
    //   setMessage({ ...message, sender: data.senderId, text: data.text, createdAt: Date.now() });
    // });

    socket.current?.on('disconnect', () => {
      console.log('disconnected');
    });
    socket.current?.on('connect', () => {
      console.log('connected');
    });

    return () => socket.current?.disconnect();
  }, [user]);

  // useEffect(() => {

  //   sendMessage(userId, receiverId, text);
  // }, [message]);

  return { onlineUsers, socket, arrivalMessage };
};
