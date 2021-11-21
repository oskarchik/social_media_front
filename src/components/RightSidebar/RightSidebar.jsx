import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledRightSidebar } from './RightSidebar.style';

const RightSidebar = () => {
  const { user } = useSelector((state) => state.auth.user);

  const [birthDays, setBirthDays] = useState([]);

  const checkBirthDays = (user) => {
    user.contacts.map((contact) => {
      return new Date(contact.dateOfBirth).toLocaleString('en-us', { day: 'numeric', month: 'short' }) ==
        new Date().toLocaleString('en-us', { day: 'numeric', month: 'short' })
        ? setBirthDays((prevState) => [...prevState, contact])
        : null;
    });
  };

  useEffect(() => {
    if (user) {
      checkBirthDays(user);
    }
  }, [user]);

  return (
    <div className='right-sidebar__wrapper'>
      <StyledRightSidebar>
        <div className='right-sidebar__container'>
          {birthDays.length > 0 && (
            <div className='birthday__container'>
              <img className='birthday__img' src='/assets/icons/gift-icon.png' alt='gift' />
              <span className='birthday__text'>
                {birthDays.length > 1 ? (
                  <>
                    <b>{`${birthDays[0].firstName} ${birthDays[0].lastName} `}</b>and{' '}
                    <b>{birthDays.length - 1} other friends</b> have a birthday today
                  </>
                ) : (
                  <>
                    <b>{`${birthDays[0].firstName} ${birthDays[0].lastName} `}</b> have a birthday today.
                  </>
                )}
              </span>
            </div>
          )}
          <img className='ad__img' src='/assets/ad.jpg' alt='advertisement' />
          <h4 className='friends__title'>Online Friends</h4>
          <ul className='friends__list'>
            {user?.contacts?.map((contact) => {
              return (
                <li className='friends__item' key={contact._id}>
                  <div className='profile-image__container'>
                    <img className='friends__image' src={contact.avatar} alt='friend' />
                    <span className='friends__online'></span>
                    <span className='friends__name'>{contact.firstName}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </StyledRightSidebar>
    </div>
  );
};

export default RightSidebar;
