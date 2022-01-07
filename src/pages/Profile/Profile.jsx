import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post, Share } from '../../components';

import { getUserPostsAsync } from '../../redux/slices/post.slice';

import { StyledProfile } from './Profile.style';
import { CameraAlt, ControlPoint, ModeEdit } from '@mui/icons-material';
import { useViewport } from '../../hooks/useViewport';

const Profile = () => {
  const { user } = useSelector((state) => state.auth.user);
  const { posts } = useSelector((state) => state.post);

  const { width } = useViewport();
  const dispatch = useDispatch();

  const breakpoint = 700;

  useEffect(() => {
    dispatch(getUserPostsAsync(user._id));
  }, [dispatch]);

  return (
    <>
      <StyledProfile>
        <div className='profile__container'>
          <header className='profile__header'>
            <div className='profile__top'>
              {user.coverPic && <img className='cover__img' src={user.coverPic} alt='cover' />}
              <div className='avatar__container'>
                <div className='avatar__wrapper'>
                  <img className='user__img' src={user.avatar || 'assets/profile/default_profile.png'} alt='profile' />
                  <button className='btn__add-profile'>
                    <CameraAlt />
                  </button>
                </div>
              </div>
              <button className='btn__add-cover'>
                <CameraAlt className='camera__icon' />
                {width > breakpoint && <span className='btn__add-photo-text'>Edit Cover Photo</span>}
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
                {width > breakpoint - 150 && (
                  <li className='menu__item'>
                    <button className='item__btn'>Story Archive</button>
                  </li>
                )}
                <li className='menu__item'>
                  <button className='item__btn'>More</button>
                </li>
              </ul>
              <ul className='menu__buttons'>
                <li className='buttons__item '>
                  <button className='buttons__btn add'>
                    <ControlPoint className='buttons__icon edit' />
                    <span className='buttons__text'>Add a Story</span>
                  </button>
                </li>
                <li className='buttons__item'>
                  <button className='buttons__btn edit'>
                    <ModeEdit className='buttons__icon edit' />
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
            <div className='left' style={width < breakpoint ? { width: '80vw' } : null}>
              <Share></Share>
              {posts.length > 0 &&
                posts.map((post) => {
                  return <Post post={post} key={post._id} />;
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
