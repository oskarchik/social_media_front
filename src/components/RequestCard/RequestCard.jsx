import { useDispatch, useSelector } from 'react-redux';
import { acceptRequestAsync, declineRequestAsync, removeContactAsync } from '../../redux/slices/auth.slice';
import { StyledRequestCard } from './RequestCard.style';
import { useHistory } from 'react-router-dom';

const RequestCard = (props) => {
  const history = useHistory();
  const { request, isContact, contact } = props;
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth.user);
  console.log(request);

  const acceptRequest = async (userId, reqUserId) => {
    const data = { userId, reqUserId };
    await dispatch(acceptRequestAsync(data));
  };

  const declineRequest = async (userId, reqUserId) => {
    const data = { userId, reqUserId };
    await dispatch(declineRequestAsync(data));
  };

  const removeContact = async (userId, contactId) => {
    const data = { userId, contactId };
    await dispatch(removeContactAsync(data));
  };

  return (
    <>
      <StyledRequestCard className='request-card'>
        <div className='request-card__wrapper'>
          <div className='request-card__img'>
            <img
              className='profile__img'
              src={
                isContact
                  ? contact.avatar || 'assets/profile/default_profile.png'
                  : request.avatar || 'assets/profile/default_profile.png'
              }
              alt='user'
            />
          </div>
          <div className='request-card__name'>
            <h3 className='name'>
              {isContact ? contact.firstName : request.firstName} {isContact ? contact.lastName : request.lastName}
            </h3>
          </div>
          {!isContact && user && (
            <div className='request-card__buttons'>
              <button
                className='request-card__confirm btn'
                onClick={() => {
                  acceptRequest(user._id, request._id);
                }}
              >
                Confirm
              </button>
              {request && (
                <button className='request-card__remove btn' onClick={() => declineRequest(user._id, request._id)}>
                  Remove
                </button>
              )}
            </div>
          )}
          {isContact && user && (
            <div className='request-card__buttons'>
              <button
                className='request-card__confirm btn'
                onClick={() => {
                  history.push({ pathname: '/messenger', state: { data: contact } });
                }}
              >
                Message
              </button>
              {contact && (
                <button className='request-card__remove btn' onClick={() => removeContact(user._id, contact._id)}>
                  Remove friend
                </button>
              )}
            </div>
          )}
        </div>
      </StyledRequestCard>
    </>
  );
};

export default RequestCard;
