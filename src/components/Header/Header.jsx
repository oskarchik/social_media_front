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
          <span className='logo'>Lg</span>
          <div className='searchbar__container'>
            <SearchIcon className='search__icon' />
            <input type='text' placeholder='Search Lg' className='search__input' />
          </div>
        </div>
        <div className='links__container'>
          <div className='header__links'>
            <div className='link'>
              <HomeIcon />
            </div>
            <div className='link'>
              <PersonIcon />
              <span className='link__badge'>1</span>
            </div>
            <div className='link'>
              <ChatIcon />
              <span className='link__badge'>2</span>
            </div>
            <div className='link'>
              <NotificationsIcon />
              <span className='link__badge'>3</span>
            </div>
          </div>
        </div>
        <div className='profile__container'>
          <img className='profile__picture' src='/assets/profile/default_user.png' alt='user ' />
          <p className='profile__name'>Jonny</p>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
