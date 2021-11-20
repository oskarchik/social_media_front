import { StyledCard } from './Card.style';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Header from '../Header/Header';

const Card = (props) => {
  //   console.log('props card', props);
  const { user, post } = props;

  return (
    <>
      {user && (
        <>
          <StyledCard className='card'>
            <div className='content'>
              <div className='card__avatar'>
                <img src={user.avatar} alt='man' />
              </div>

              <div className='card__user'>
                <h3 className='card__name'>
                  {user.firstName} {user.lastName}
                </h3>
              </div>
              <div className='card__icon'>
                {!props.contact ? <ChatIcon className='icon' /> : <PersonAddAlt1Icon className='icon' />}
              </div>
            </div>
          </StyledCard>
          {!props.last && <hr className='card__hr' />}
        </>
      )}
    </>
  );
};

export default Card;
