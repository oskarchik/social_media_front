import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledPostModal } from './PostModal.style';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PostModalContext from '../../context/PostModalContext';

import CloseIcon from '@mui/icons-material/Close';
import { updatePostAsync, createPostAsync, sharePostAsync } from '../../redux/slices/post.slice';
import { useEffect } from 'react';

const PostModal = (props) => {
  const { mode } = props;

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user);
  const { posts } = useSelector((state) => state.post);
  const { isOpen, setIsOpen, setMode, postId, setPostId } = useContext(PostModalContext);
  const [isFileLoaderOpen, setIsFileLoaderOpen] = useState(false);
  const [data, setData] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const currentPost = posts.find((post) => {
    return post._id === postId ? post : null;
  });
  // console.log('currentpost text', currentPost.text);
  // console.log('data text', data.text);

  const onInputChange = (e) => {
    const value = e.target.value;
    // value.length > 0 ? setIsDisabled(false) : setIsDisabled(true);
    setData({ ...data, [e.target.name]: value });
  };

  const closeModal = () => {
    return !isOpen ? isOpen : setIsOpen((prevState) => !prevState);
  };

  const handleInputFile = () => {
    setIsFileLoaderOpen((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'Create') {
      dispatch(createPostAsync(data));
    }
    if (mode === 'Edit' && (currentPost.text !== data.text || currentPost.image !== data.image)) {
      dispatch(updatePostAsync(data));
    }
    if (mode === 'Share') {
      dispatch(sharePostAsync(data));
    }

    setData({ userId: '' });
    setIsOpen((prevState) => !prevState);
  };

  const selectMode = () => {
    switch (mode) {
      case 'Edit':
        setData({
          text: currentPost.text,
          image: currentPost.image,
          userId: user._id,
          postId,
        });
        break;
      case 'Create':
        setData({
          userId: user._id,
        });
        break;
      case 'Share':
        setData({
          userId: user._id,
          postRef: postId,
          text: '',
        });
        break;
      default:
        return null;
    }
  };
  useEffect(() => {
    selectMode();
  }, []);

  return (
    <StyledPostModal>
      <div className='modal__wrapper'>
        <div className='modal__container'>
          <div className='modal__top'>
            <div className='title__container'>
              <h2 className='modal__title'>{`${mode} post`}</h2>
              <button className='modal__close' onClick={closeModal}>
                <CloseIcon className='icon' />
              </button>
            </div>
          </div>
          <hr className='modal__hr' />
          <div className='modal__center'>
            <div className='modal__user-info'>
              <div className='avatar'>
                <img
                  className='profile__picture'
                  src={user?.avatar ? user.avatar : '/assets/profile/default_profile.png'}
                  alt='user'
                />
              </div>
              <p className='user__name'>
                {user.firstName} {user.lastName}
              </p>
            </div>
            <form className='modal__content' id='post-form' onSubmit={handleSubmit}>
              <textarea
                className='modal__text'
                onChange={onInputChange}
                name='text'
                id=''
                rows='4'
                value={data?.text}
                placeholder={
                  mode === 'Share' ? `Make a comment about this...` : `What's on your mind, ${user.firstName}?`
                }
              ></textarea>
              {isFileLoaderOpen && (
                <input
                  className='modal__image'
                  type='text'
                  onChange={onInputChange}
                  name='image'
                  value={data?.image}
                  placeholder='Add your photo/video'
                />
              )}
              {/* {mode === 'Share' ? (
                <div className='shared__post'>
                  {currentPost.image ? (
                    <div className='image__container'>
                      <img className='shared__image' src={currentPost.image} alt='post' />
                    </div>
                  ) : null}
                  {currentPost.text ? <div className='shared__text'>{currentPost.text}</div> : null}
                </div>
              ) : null} */}
              {mode === 'Share' && currentPost ? (
                <div className='shared__post'>
                  {currentPost.image && (
                    <div className='image__container'>
                      <img className='shared__image' src={currentPost.image} alt='post' />
                    </div>
                  )}
                  {currentPost.text && <div className='shared__text'>{currentPost.text}</div>}
                </div>
              ) : null}
              <div className='modal__actions'>
                <span className='actions__text'>Add to your post</span>
                <ul className='actions__list'>
                  {mode !== 'Share' && (
                    <li className='actions__item'>
                      <PhotoLibraryIcon className='icon image' onClick={handleInputFile} />
                    </li>
                  )}
                  <li className='actions__item'>
                    <PersonAddAlt1Icon className='icon person' />
                  </li>
                  <li className='actions__item'>
                    <LocalOfferIcon className='icon tag' />
                  </li>
                </ul>
              </div>
              <div className='modal__bottom'>
                <button className='modal__btn' type='submit' form='post-form'>
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StyledPostModal>
  );
};

export default PostModal;
