import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledRightSidebar } from './RightSidebar.style';

const RightSidebar = () => {
  const { user } = useSelector((state) => state.user.user);
  const [birthDays, setBirthDays] = useState([]);

  const checkBirthDays = (user) => {
    user.following.map((follow) => {
      return new Date(follow.dateOfBirth).toLocaleString('en-us', { day: 'numeric', month: 'short' }) ==
        new Date().toLocaleString('en-us', { day: 'numeric', month: 'short' })
        ? setBirthDays((prevState) => [...prevState, follow])
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
            {user?.following?.map((follow) => {
              return (
                <li className='friends__item' key={follow._id}>
                  <div className='profile-image__container'>
                    <img className='friends__image' src={follow.avatar} alt='friend' />
                    <span className='friends__online'></span>
                    <span className='friends__name'>{follow.firstName}</span>
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
