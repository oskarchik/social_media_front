import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import { StyledHeader } from './Header.styled';
import LogoutIcon from '@mui/icons-material/Logout';
// import { logOutA } from '../../redux/slices/user.slice';
import { signOutAsync } from '../../redux/slices/user.slice';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user.user);

  const logOut = () => {
    dispatch(signOutAsync());
  };

  return (
    <StyledHeader>
      <div className='header__container'>
        <div className='logo__container'>
          <span className='logo'>Fb</span>
          <div className='searchbar__container'>
            <SearchIcon className='search__icon' />
            <input type='text' placeholder='Search Lg' className='search__input' />
          </div>
        </div>
        <div className='links__container'>
          <div className='header__links'>
            <div className='link'>
              <Link to='/' className='anchor'>
                <HomeIcon />
              </Link>
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
          <Link to='/profile'>
            <img
              className='profile__picture'
              src={user ? user.avatar : '/assets/profile/default_user.png'}
              alt='user'
            />
          </Link>
          <p className='profile__name'>{user?.firstName}</p>
          <LogoutIcon className='logout' onClick={logOut} />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
