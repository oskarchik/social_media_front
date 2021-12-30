import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import SocketContext from '../../context/SocketContext';
import SocketContext from '../../context/SocketContext';
import { useSocket } from '../../hooks/useSocket';
import { StyledRightSidebar } from './RightSidebar.style';
import { io } from 'socket.io-client';
import { socket } from '../Socket/Socket';

const RightSidebar = () => {
  const { user } = useSelector((state) => state.auth.user);
  // const { socket } = useSocket();
  // const socket = io('ws://localhost:5500', {
  //   withCredentials: true,
  //   // forceNew: true,
  // });
  //  s
  const [onlineFriends, setOnlineFriends] = useState([]);
  const [onliners, setOnliners] = useState([]);
  const currentSocket = useContext(SocketContext);

  const [birthDays, setBirthDays] = useState([]);

  const checkBirthDays = (user) => {
    user.contacts.map((contact) => {
      return new Date(contact.dateOfBirth).toLocaleString('en-us', { day: 'numeric', month: 'short' }) ==
        new Date().toLocaleString('en-us', { day: 'numeric', month: 'short' })
        ? setBirthDays((prevState) => [...prevState, contact])
        : null;
    });
  };

  useEffect(() => {
    if (user) {
      checkBirthDays(user);
    }
  }, [user]);
  console.log(socket);
  useEffect(() => {
    if (socket.disconnected) {
      socket.connect('ws://localhost:5500', {
        withCredentials: true,
        forceNew: true,
      });
    }
    socket.emit('addUser', user._id);
    socket.on('getUsers', (users) => {
      setOnlineFriends(user?.contacts?.filter((contact) => users.some((user) => user.userId === contact._id)));
    });
    return () => socket.disconnect();
  }, [socket]);

  // useEffect(() => {
  //   console.log('friends', onlineFriends);
  //   console.log('onliners', onliners);
  // }, [currentSocket, onliners, socket]);

  return (
    <div className='right-sidebar__wrapper'>
      <StyledRightSidebar>
        <div className='right-sidebar__container'>
          {birthDays.length > 0 && (
            <div className='birthday__container'>
              <img className='birthday__img' src='/assets/icons/gift-icon.png' alt='gift' />
              <span className='birthday__text'>
                {birthDays.length > 1 ? (
                  <>
                    <b>{`${birthDays[0].firstName} ${birthDays[0].lastName} `}</b>and{' '}
                    <b>{birthDays.length - 1} other friends</b> have a birthday today
                  </>
                ) : (
                  <>
                    <b>{`${birthDays[0].firstName} ${birthDays[0].lastName} `}</b> have a birthday today.
                  </>
                )}
              </span>
            </div>
          )}
          <img className='ad__img' src='/assets/ad.jpg' alt='advertisement' />
          <h4 className='friends__title'>Online Friends</h4>
          <ul className='friends__list'>
            {onlineFriends.length > 0 &&
              onlineFriends.map((friend) => {
                return (
                  <li className='friends__item' key={friend._id}>
                    <div className='profile-image__container'>
                      <img
                        className='friends__image'
                        src={friend.avatar || 'assets/profile/default_profile.png'}
                        alt='friend'
                      />
                      <span className='friends__online'></span>
                      <span className='friends__name'>{friend.firstName}</span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </StyledRightSidebar>
    </div>
  );
};

export default RightSidebar;
