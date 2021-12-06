import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledConversation } from './Conversation.style';
import { getMessages } from '../../api/message';

const Conversation = ({ conversation }) => {
  const { user } = useSelector((state) => state.auth.user);
  // const [conversationUsers, setConversationUsers] = useState([]);

  const filteredUsers = conversation.members.filter((person) => {
    return person._id !== user._id;
  });

  // console.log('filtered', filteredUsers);

  // useEffect(() => {
  //   getMessages(Conversation._id);
  // },[]);

  return (
    <>
      {filteredUsers.length > 0 &&
        filteredUsers.map((user) => {
          return (
            <StyledConversation className='conversation' key={user._id}>
              <img className='conversation__image' src={user.avatar} alt='' />
              <span className='conversation__name'>
                {user.firstName} {user.lastName}
              </span>
            </StyledConversation>
          );
        })}
    </>
  );
};

export default Conversation;
