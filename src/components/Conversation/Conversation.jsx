import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { StyledConversation } from './Conversation.style';

const Conversation = ({ conversation, setChatter }) => {
  const { user } = useSelector((state) => state.auth.user);

  const filteredUsers = user.contacts.filter((contact) => {
    return conversation.members.includes(contact._id);
  });

  useEffect(() => {
    setChatter(conversation.members.find((member) => member !== user._id));
  }, []);

  return (
    <>
      {filteredUsers.length > 0 &&
        filteredUsers.map((user) => {
          return (
            <StyledConversation className='conversation' key={user._id}>
              <img
                className='conversation__image'
                src={user.avatar ? user.avatar : 'assets/profile/default_profile.png'}
                alt=''
              />
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
