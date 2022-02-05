import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Bookmarks,
  Chat,
  Event,
  Groups,
  Help,
  KeyboardArrowDown,
  KeyboardArrowUp,
  PlayCircle,
  RssFeed,
  School,
  Work,
} from '@mui/icons-material';

import { StyledLeftSidebar } from './LeftSidebar.style';
import { useState } from 'react';

const LeftSidebar = () => {
  const { user } = useSelector((state) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledLeftSidebar className='left-sidebar__wrapper'>
      <div className='sidebar__container'>
        <ul className={`sidebar__list ${isOpen ? 'open' : ''}`}>
          <li className='sidebar__item'>
            <RssFeed className='sidebar__icon' />
            <span className='icon__text'>Feed</span>
          </li>
          <li className='sidebar__item'>
            <Chat className='sidebar__icon' />
            <span className='icon__text'>Chats</span>
          </li>
          <li className='sidebar__item'>
            <PlayCircle className='sidebar__icon' />
            <span className='icon__text'>Video</span>
          </li>
          <li className='sidebar__item'>
            <Groups className='sidebar__icon' />
            <span className='icon__text'>Groups</span>
          </li>
          <li className='sidebar__item'>
            <Bookmarks className='sidebar__icon' />
            <span className='icon__text'>Bookmarks</span>
          </li>
          <li className='sidebar__item'>
            <Help className='sidebar__icon' />
            <span className='icon__text'>Help</span>
          </li>
          <li className='sidebar__item'>
            <Work className='sidebar__icon' />
            <span className='icon__text'>Jobs</span>
          </li>
          <li className='sidebar__item'>
            <Event className='sidebar__icon' />
            <span className='icon__text'>Events</span>
          </li>
          <li className='sidebar__item'>
            <School className='sidebar__icon' />
            <span className='icon__text'>Courses</span>
          </li>
        </ul>
        <div className='more__container'>
          <button className='sidebar__btn' onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </button>
          <span>Show more</span>
        </div>
        <hr className='sidebar__hr' />
        <ul className='friends__list'>
          {user &&
            user.contacts?.map((contact) => {
              return (
                <li className='friends__item' key={contact._id}>
                  <Link to={{ pathname: '/user', state: { contact } }} className='friends__link'>
                    <img
                      className='friends__profile-pic'
                      src={contact.avatar || 'assets/profile/default_profile.png'}
                      alt={contact.firstName}
                    />
                    <span className='friends__name'>{contact.firstName}</span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </StyledLeftSidebar>
  );
};

export default LeftSidebar;
