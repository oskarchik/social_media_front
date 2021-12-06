import { StyledChatOnline } from './ChatOnline.style';

const ChatOnline = () => {
  return (
    <StyledChatOnline className='chat-online'>
      <div className='chat-online__friend'>
        <div className='image__container'>
          <img className='chat-online__image' src='/assets/profile/default_profile.png' alt='' />
          <div className='chat-online__badge'></div>
        </div>
        <span className='chat-online__name'>Pepeito</span>
      </div>
    </StyledChatOnline>
  );
};

export default ChatOnline;
