import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useViewport } from '../../hooks/useViewport';

import { StyledConversation } from './Conversation.style';

const Conversation = ({ conversation, setChatter }) => {
  const { user } = useSelector((state) => state.user.user);

  const { width } = useViewport();
  const breakpoint = 700;

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
              {width > breakpoint && (
                <span className='conversation__name'>
                  {user.firstName} {user.lastName}
                </span>
              )}
            </StyledConversation>
          );
        })}
    </>
  );
};

export default Conversation;
