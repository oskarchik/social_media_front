import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { StyledHeader } from './Header.styled';
import { signOutAsync } from '../../redux/slices/auth.slice';
import { getAllUsersAsync } from '../../redux/slices/user.slice';
import { getTimeLineAsync } from '../../redux/slices/post.slice';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user);
  const { users } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);
  const [input, setInput] = useState('');
  const history = useHistory();

  const logOut = () => {
    dispatch(signOutAsync());
  };

  const filterData = (str) => {
    dispatch(getTimeLineAsync(user._id));
    const filteredPosts = posts.filter((post) => {
      return (
        post.text.toLowerCase().includes(str.toLowerCase()) ||
        post.userId.firstName.toLowerCase().includes(str.toLowerCase()) ||
        post.userId.lastName.toLowerCase().includes(str.toLowerCase())
      );
    });
    const filteredUsers = users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(str.toLowerCase()) ||
        user.lastName.toLowerCase().includes(str.toLowerCase())
      );
    });
    const filteredContacts = filteredUsers.filter((filteredUser) => {
      return filteredUser.contacts.includes(user._id) ? filteredUser : null;
    });
    const filteredNoContacts = filteredUsers.filter((filteredUser) => {
      return !filteredUser.contacts.includes(user._id) ? filteredUser : null;
    });

    user.contacts.map((contact) => console.log(contact._id));
    return { users: filteredNoContacts, posts: filteredPosts, contacts: filteredContacts };
  };

  const searchValue = (e) => {
    e.preventDefault();
    const res = filterData(input);
    history.push({ pathname: '/search', state: { data: res } });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);

  return (
    <StyledHeader>
      <div className='header__container'>
        <div className='logo__container'>
          <span className='logo'>Fb</span>
          <div className='searchbar__container'>
            <SearchIcon className='search__icon' />
            <form onSubmit={searchValue}>
              <input
                type='text'
                placeholder='Search Fb'
                className='search__input'
                name='searchBar'
                onChange={handleInputChange}
              />
            </form>
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
              <Link to='/friends' className='anchor'>
                <PersonIcon />
                {user?.receivedRequests?.length > 0 && (
                  <span className='link__badge'>{user.receivedRequests.length}</span>
                )}
              </Link>
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
          <div className='profile__user'>
            <Link to='/profile'>
              <img
                className='profile__picture'
                src={user ? user.avatar : '/assets/profile/default_user.png'}
                alt='user'
              />
            </Link>
            <p className='profile__name'>{user?.firstName}</p>
          </div>
          <div className='profile__links'>
            <Link to='/' className='link'>
              <SettingsIcon className='profile__settings' />
            </Link>
            <LogoutIcon className='logout' onClick={logOut} />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
