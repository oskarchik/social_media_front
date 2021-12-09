import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledChatOnline } from './ChatOnline.style';
import { getConversationsByMembers, getUserConversations } from '../../api/conversation';

const ChatOnline = ({ onlineUsers, currentUser, setCurrentChat }) => {
  const { user } = useSelector((state) => state.auth.user);
  const [friends, setFriends] = useState(user.contacts);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    setOnlineFriends(friends.filter((friend) => onlineUsers?.some((onlineUser) => onlineUser._id === friend._id)));
  }, [friends, onlineUsers]);

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
