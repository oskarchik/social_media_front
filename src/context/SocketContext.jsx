import { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';

const socket = io('ws://localhost:5500', {
  withCredentials: true,
});
const SocketContext = createContext(socket);

export const SocketProvider = ({ children }) => {
  // const [onlineUsers, setOnlineUsers] = useState([]);
  // const { user } = useSelector((state) => state.auth.user);
  // useEffect(() => {
  //   socket.emit('addUser', user?._id);
  //   socket.on('getUsers', (users) => {
  //     setOnlineUsers(user?.contacts?.filter((contact) => users.some((user) => user.userId === contact._id)));
  //   });
  //   return () => socket.disconnect();
  // }, [user]);
  // console.log('online provider', onlineUsers);
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketContext;
