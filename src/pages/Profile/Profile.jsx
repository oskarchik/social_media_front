import { useDispatch, useSelector } from 'react-redux';
import { StyledProfile } from './Profile.style';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Header from '../../components/Header/Header';
import Share from '../../components/Share/Share';
import Post from '../../components/Post/Post';
import { useEffect } from 'react';
import { getUserPostsAsync } from '../../redux/slices/post.slice';

const Profile = (props) => {
  const { user } = useSelector((state) => state.auth.user);
  const { posts } = useSelector((state) => state.post);
  console.log('posts', posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPostsAsync(user._id));
    // console.log('useSelector posts profile', posts);
  }, [dispatch]);

  // console.log(user);
  return (
    <>
      <Header />
      <StyledProfile>
        <div className='profile__container'>
          <header className='profile__header'>
            <div className='profile__top'>
              {user.coverPic ? (
                <img className='cover__img' src={user.coverPic} alt='cover' />
              ) : (
                <div className='cover__div'></div>
              )}
              <img className='user__img' src={user.avatar || 'assets/profile/default_profile.png'} alt='profile' />
              <button className='btn__add-profile'>
                <CameraAltIcon />
              </button>
              <button className='btn__add-cover'>
                <CameraAltIcon className='camera__icon' />
                <span className='btn__add-photo-text'>Edit Cover Photo</span>
              </button>
            </div>
            <div className='profile__name'>
              <h1 className='username'>{user.firstName}</h1>
              <hr className='name__hr' />
            </div>
            <div className='menu__container'>
              <ul className='menu__links'>
                <li className='menu__item'>
                  <button className='item__btn'>Post</button>
                </li>
                <li className='menu__item'>
                  <button className='item__btn'>About</button>
                </li>
                <li className='menu__item'>
                  <button className='item__btn'>Friends {user.contacts?.length}</button>
                </li>
                <li className='menu__item'>
                  <button className='item__btn'>Photos</button>
                </li>
                <li className='menu__item'>
                  <button className='item__btn'>Story Archive</button>
                </li>
                <li className='menu__item'>
                  <button className='item__btn'>More</button>
                </li>
              </ul>
              <ul className='menu__buttons'>
                <li className='buttons__item '>
                  <button className='buttons__btn add'>
                    <ControlPointIcon className='buttons__icon edit' />
                    <span className='buttons__text'>Add a Story</span>
                  </button>
                </li>
                <li className='buttons__item'>
                  <button className='buttons__btn edit'>
                    <ModeEditIcon className='buttons__icon edit' />
                    <span className='buttons__text'>Edit Profile</span>
                  </button>
                </li>
                <li className='buttons__item'>
                  <button className='buttons__btn'>...</button>
                </li>
              </ul>
            </div>
          </header>
          <main className='profile__main'>
            <div className='left'>
              <Share></Share>
              {posts.length > 0 &&
                posts.map((post) => {
                  return <Post post={post} />;
                })}
            </div>
            <div className='right'>
              <div className='main__photos'>
                <div className='photos__top'>
                  <h3 className='photos__title'>Photos</h3>
                  <a className='photos__link' href='#'>
                    See all photos
                  </a>
                </div>
                <div className='grid__container'>
                  <div className='photos__grid'>
                    {posts.length > 0 &&
                      posts.map((post) => {
                        return (
                          post.image && (
                            <div className='grid__tile' key={post._id}>
                              <img className='photos__friends' src={post.image} alt='Post' />
                            </div>
                          )
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className='main__friends'>
                <div className='contacts__top'>
                  <div className='contacts__title'>
                    <h3 className='title'>Friends</h3>
                    <span className='counter'> {user.contacts?.length} friends</span>
                  </div>
                  <div className='contacts__list'>
                    <a className='contacts__link' href='#'>
                      See all friends
                    </a>
                  </div>
                </div>

                <div className='contacts__grid'>
                  {user &&
                    user.contacts?.map((contact) => {
                      return (
                        <div className='contacts__tile' key={contact._id}>
                          <img className='contacts__picture' src={contact.avatar} alt='contact' />
                          <h4 className='contacts__name'>
                            {contact.firstName} {contact.lastName}
                          </h4>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </main>
        </div>
      </StyledProfile>
    </>
  );
};

export default Profile;
