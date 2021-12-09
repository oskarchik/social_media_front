import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'timeago.js';
import { StyledMessage } from './Message.style';

const Message = ({ message, own }) => {
  const { user } = useSelector((state) => state.auth.user);
  const [chatter, setChatter] = useState(null);

  useEffect(() => {
    if (message.sender._id !== user._id) {
      setChatter(user.contacts.find((contact) => contact._id === message.sender));
    }
  }, [message, user]);

  return (
    <StyledMessage className={own ? 'message own' : 'message'}>
      <div className='message__top'>
        <img className='message__image' src={chatter ? chatter.avatar : message.sender.avatar} alt='' />
        <p className='message__text'>{message.text}</p>
      </div>
      <div className='message__bottom'>{format(message.createdAt)}</div>
    </StyledMessage>
  );
};

export default Message;
