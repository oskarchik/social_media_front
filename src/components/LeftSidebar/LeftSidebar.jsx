import { StyledLeftSidebar } from './LeftSidebar.style';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const LeftSidebar = () => {
  return (
    <div className='left-sidebar__wrapper'>
      <StyledLeftSidebar>
        <div className='sidebar__container'>
          <ul className='sidebar__list'>
            <li className='sidebar__item'>
              <RssFeedIcon className='sidebar__icon' />
              <span className='icon__text'>Feed</span>
            </li>
            <li className='sidebar__item'>
              <ChatIcon className='sidebar__icon' />
              <span className='icon__text'>Chats</span>
            </li>
            <li className='sidebar__item'>
              <PlayCircleIcon className='sidebar__icon' />
              <span className='icon__text'>Video</span>
            </li>
            <li className='sidebar__item'>
              <GroupsIcon className='sidebar__icon' />
              <span className='icon__text'>Groups</span>
            </li>
            <li className='sidebar__item'>
              <BookmarksIcon className='sidebar__icon' />
              <span className='icon__text'>Bookmarks</span>
            </li>
            <li className='sidebar__item'>
              <HelpIcon className='sidebar__icon' />
              <span className='icon__text'>Help</span>
            </li>
            <li className='sidebar__item'>
              <WorkIcon className='sidebar__icon' />
              <span className='icon__text'>Jobs</span>
            </li>
            <li className='sidebar__item'>
              <EventIcon className='sidebar__icon' />
              <span className='icon__text'>Events</span>
            </li>
            <li className='sidebar__item'>
              <SchoolIcon className='sidebar__icon' />
              <span className='icon__text'>Courses</span>
            </li>
          </ul>
          <div className='more__container'>
            <button className='sidebar__btn'>
              <KeyboardArrowDownIcon />
            </button>
            <span>Show more</span>
          </div>
          <hr className='sidebar__hr' />
          <ul className='friends__list'>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman1.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman2.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/man2.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman3.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman4.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman4.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman4.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman4.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman4.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman4.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman4.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman4.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman4.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman4.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
            <li className='friends__item'>
              <img className='friends__profile-pic' src='/assets/profile/woman4.jpg' alt='' />
              <span className='friends__name'>Ana</span>
            </li>
          </ul>
        </div>
      </StyledLeftSidebar>
    </div>
  );
};

export default LeftSidebar;
