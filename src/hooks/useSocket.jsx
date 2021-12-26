import { useEffect } from 'react';
import { useCallback } from 'react';
import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import SocketContext from '../context/SocketContext';

export const useSocket = () => {
  const { user } = useSelector((state) => state.auth.user);
  const [onlineFriends, setOnlineFriends] = useState([]);

  const socket = useContext(SocketContext);

  const onGetUsers = useCallback((users) => {
    setOnlineFriends(user?.contacts?.filter((contact) => users.some((user) => user.userId === contact._id)));
  }, []);

  // useEffect(() => {
  //   socket.emit('addUser', user?._id);
  //   socket.on('getUsers', onGetUsers);

  //   return () => socket.removeAllListeners();
  // }, [user, onGetUsers, socket]);

  return { socket, onlineFriends };
};
