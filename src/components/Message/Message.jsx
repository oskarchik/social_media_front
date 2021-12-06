import { format } from 'timeago.js';
import { StyledMessage } from './Message.style';

const Message = ({ message, own }) => {
  return (
    <StyledMessage className={own ? 'message own' : 'message'}>
      <div className='message__top'>
        <img className='message__image' src={message.sender.avatar} alt='' />
        <p className='message__text'>{message.text}</p>
      </div>
      <div className='message__bottom'>{format(message.createdAt)}</div>
    </StyledMessage>
  );
};

export default Message;
