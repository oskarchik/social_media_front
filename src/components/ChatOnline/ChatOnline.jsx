import { useSelector } from 'react-redux';

import { getConversationsByMembers } from '../../api/conversation';

import { StyledChatOnline } from './ChatOnline.style';

const ChatOnline = ({ setCurrentChat, onlineFriends }) => {
  const { user } = useSelector((state) => state.auth.user);

  const handleClick = async (friend) => {
    const userConversation = await getConversationsByMembers(user._id, friend._id);

    setCurrentChat(userConversation);
  };

  return (
    <StyledChatOnline className='chat-online'>
      {onlineFriends.length > 0 &&
        onlineFriends.map((onlineFriend) => {
          return (
            <div className='chat-online__friend' key={onlineFriend._id} onClick={() => handleClick(onlineFriend)}>
              <div className='image__container'>
                <img className='chat-online__image' src={onlineFriend.avatar} alt='' />
                <div className='chat-online__badge'></div>
              </div>
              <span className='chat-online__name'>
                {onlineFriend.firstName} {onlineFriend.lastName}
              </span>
            </div>
          );
        })}
    </StyledChatOnline>
  );
};

export default ChatOnline;
