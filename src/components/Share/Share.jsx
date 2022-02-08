import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PostModalContext from '../../context/PostModalContext';

import { Label, PermMedia, Room, TagFaces } from '@mui/icons-material';
import { StyledShare } from './Share.style';

const Share = () => {
  const { user } = useSelector((state) => state.user.user);
  const { isOpenPostModal, setIsOpenPostModal, setMode } = useContext(PostModalContext);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCreatePostForm = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setIsOpenPostModal((prevState) => !prevState);
    setMode('Create');
  };
  useEffect(() => {
    !isOpenPostModal && setIsDisabled(false);
  }, [isOpenPostModal]);
  return (
    <>
      <StyledShare>
        <div className='share__container'>
          <div className='share__top'>
            <img
              className='profile__picture'
              src={user?.avatar ? user.avatar : '/assets/profile/default_profile.png'}
              alt='user'
            />
            <input
              type='text'
              className='share__input'
              placeholder={`what's in your mind, ${user?.firstName}?`}
              onFocus={handleCreatePostForm}
              disabled={isDisabled}
            />
          </div>
          <hr className='shareHr' />
          <div className='share__bottom'>
            <div className='share__options'>
              <div className='option'>
                <PermMedia className='share__icon media' />
                <span className='option_text'>Photo/Video</span>
              </div>
              <div className='option'>
                <Room className='share__icon location' />
                <span className='option_text'>Location</span>
              </div>
              <div className='option'>
                <Label className='share__icon label' />
                <span className='option_text'>Tag</span>
              </div>
              <div className='option'>
                <TagFaces className='share__icon tag' />
                <span className='option_text'>Feeling/Activity</span>
              </div>
              <button className='share__btn'>Share</button>
            </div>
          </div>
        </div>
      </StyledShare>
    </>
  );
};

export default Share;
