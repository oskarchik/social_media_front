import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import { StyledHeader } from './Header.styled';
const Header = () => {
  return (
    <StyledHeader>
      <div className='header__container'>
        <div className='logo__container'>
          <span className='logo'>Logo</span>
        </div>
        <div className='searchbar__container'>
          <SearchIcon className='search__icon' />
          <input type='text' placeholder='what would you like to search' className='search__input' />
        </div>
        <div className='links__container'>
          <div className='header__links'>
            <div className='link link--home'>
              <HomeIcon />
            </div>
            <span className='link'>Timeline</span>
          </div>
          <div className='header__icons'>
            <div className='icon__item'>
              <PersonIcon />
              <span className='icon__badge'>1</span>
            </div>
            <div className='icon__item'>
              <ChatIcon />
              <span className='icon__badge'>2</span>
            </div>
            <div className='icon__item'>
              <NotificationsIcon />
              <span className='icon__badge'>3</span>
            </div>
          </div>
          <img src='/assets/profile/default_user.png' alt='user ' className='profile__picture' />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
