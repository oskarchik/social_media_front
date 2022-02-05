import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post, Share, Spinner } from '../../components';

import { getUserPostsAsync } from '../../redux/slices/post.slice';

import { StyledProfile } from './Profile.style';
import { CameraAlt, ControlPoint, ModeEdit } from '@mui/icons-material';
import { useViewport } from '../../hooks/useViewport';
import { updateAvatarAsync, updateCoverAsync } from '../../redux/slices/auth.slice';

const Profile = (props) => {
  const { user } = useSelector((state) => state.auth.user);
  const contact = props?.location?.state?.contact;
  const pathname = props?.location?.pathname;
  const [data, setData] = useState(null);
  const [isContact, setIsContact] = useState(undefined);
  const { posts } = useSelector((state) => state.post);
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageData, setImageData] = useState(null);
  const hiddenAvatarInput = useRef(null);
  const hiddenCoverInput = useRef(null);
  const modalRef = useRef(null);
  const [selectedInput, setSelectedInput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { width } = useViewport();
  const dispatch = useDispatch();
  const breakpoint = 700;
  const handleClick = (e) => {
    e.preventDefault();

    if (e.currentTarget.id === 'avatar') {
      hiddenAvatarInput.current.click();
      setIsOpen(true);
      setSelectedInput(hiddenAvatarInput.current);
    }
    if (e.currentTarget.id === 'cover') {
      hiddenCoverInput.current.click();
      setIsOpen(true);
      setSelectedInput(hiddenCoverInput.current);
    }
  };

  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    setFile(fileUploaded);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImageData(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('userId', user._id);
    if (selectedInput.id === 'avatarInput') {
      data.append('avatar', file);
      setIsLoading(true);
      await dispatch(updateAvatarAsync({ data, userId: user._id }));
      setIsLoading(false);
    }
    if (selectedInput.id === 'coverInput') {
      data.append('coverPic', file);
      setIsLoading(true);
      await dispatch(updateCoverAsync({ data, userId: user._id }));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  });
  useEffect(() => {
    setIsLoading(true);
    dispatch(getUserPostsAsync(user._id));
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    if (pathname === '/profile') {
      setData(user);
      setIsContact(false);
    }
    if (pathname === '/user') {
      setData(contact);
      setIsContact(true);
    }
  }, []);

  return (
    <>
      {!user && !contact ? null : (
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <StyledProfile>
              <div className='profile__container'>
                {isOpen && (
                  <div className='upload__container'>
                    <div className='image__container' ref={modalRef}>
                      {selectedInput.id === 'avatarInput' && file && (
                        <>
                          <img className='upload__avatar ' src={imageData} alt='' />
                          <button className='upload__btn' onClick={handleUploadImage}>
                            Upload
                          </button>
                        </>
                      )}
                      {selectedInput.id === 'coverInput' && file && (
                        <>
                          <img className='upload__cover ' src={imageData} alt='' />
                          <button className='upload__btn' onClick={handleUploadImage}>
                            Upload
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}
                <header className='profile__header'>
                  <div className='profile__top'>
                    {data?.coverPic && <img className='cover__img' src={data?.coverPic} alt='cover' />}
                    <form className='avatar__container' encType='multipart/form-data'>
                      <div className='avatar__wrapper'>
                        <img
                          className='user__img'
                          src={data?.avatar || 'assets/profile/default_profile.png'}
                          alt='profile'
                        />
                        {!isContact && (
                          <>
                            <input
                              ref={hiddenAvatarInput}
                              type='file'
                              style={{ display: 'none' }}
                              onChange={handleChange}
                              id='avatarInput'
                            />
                            <button className='btn__add-profile' onClick={handleClick} id='avatar'>
                              <CameraAlt />
                            </button>
                          </>
                        )}
                      </div>
                    </form>
                    {!isContact && (
                      <form>
                        <input
                          ref={hiddenCoverInput}
                          type='file'
                          style={{ display: 'none' }}
                          onChange={handleChange}
                          id='coverInput'
                        />
                        <button className='btn__add-cover' onClick={handleClick} id='cover'>
                          <CameraAlt className='camera__icon' />
                          {width > breakpoint && <span className='btn__add-photo-text'>Edit Cover Photo</span>}
                        </button>
                      </form>
                    )}
                  </div>
                  <div className='profile__name'>
                    <h1 className='username'>{data?.firstName}</h1>
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
                        <button className='item__btn'>Friends {data?.contacts?.length}</button>
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
                    {!isContact && <Share />}
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
                                  <>
                                    <div className='grid__tile' key={post.createdAt}>
                                      <img className='photos__friends' src={post.image} alt='Post' key={post._id} />
                                    </div>
                                  </>
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
                          <span className='counter'> {data?.contacts?.length} friends</span>
                        </div>
                        <div className='contacts__list'>
                          <a className='contacts__link' href='#'>
                            See all friends
                          </a>
                        </div>
                      </div>

                      <div className='contacts__grid'>
                        {data &&
                          data?.contacts?.map((contact) => {
                            return (
                              <div className='contacts__tile' key={contact.createdAt}>
                                <img
                                  className='contacts__picture'
                                  src={contact.avatar}
                                  key={contact.device}
                                  alt='contact'
                                />
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
          )}
        </>
      )}
    </>
  );
};

export default Profile;
