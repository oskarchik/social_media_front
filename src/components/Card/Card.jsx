import { useDispatch, useSelector } from 'react-redux';

import { sendContactRequestAsync } from '../../redux/slices/auth.slice';

import { StyledCard } from './Card.style';

import { Chat, PersonAddAlt1 } from '@mui/icons-material';

const Card = ({ contact, person, last }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user);
  const sendContactRequest = async (userId, contactRequestId) => {
    const data = { userId, contactRequestId };
    await dispatch(sendContactRequestAsync(data));
  };

  return (
    <>
      {person && (
        <>
          <StyledCard className='card'>
            <div className='content'>
              <div className='card__avatar'>
                <img src={person.avatar} alt='man' />
              </div>
              <div className='card__user'>
                <h3 className='card__name'>
                  {person.firstName} {person.lastName}
                </h3>
              </div>
              <button
                className='card__icon'
                onClick={() => sendContactRequest(user._id, person._id)}
                disabled={user.sentRequests.includes(person._id) ? true : false}
              >
                <PersonAddAlt1 className='icon' />
              </button>
            </div>
          </StyledCard>
          {!last && <hr className='card__hr' />}
        </>
      )}
      {contact && (
        <>
          <StyledCard className='card'>
            <div className='content'>
              <div className='card__avatar'>
                <img src={contact.avatar} alt='man' />
              </div>
              <div className='card__user'>
                <h3 className='card__name'>
                  {contact.firstName} {contact.lastName}
                </h3>
              </div>
              <button className='card__icon'>
                <Chat className='icon' />
              </button>
            </div>
          </StyledCard>
          {!last && <hr className='card__hr' />}
        </>
      )}
    </>
  );
};

export default Card;
