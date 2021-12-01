import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledPostModal } from './PostModal.style';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PostModalContext from '../../context/PostModalContext';

import CloseIcon from '@mui/icons-material/Close';
import { updatePostAsync, createPostAsync } from '../../redux/slices/post.slice';
import { useEffect } from 'react';

const PostModal = (props) => {
  const { isEditing, postId } = props;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user);
  const { isOpen, setIsOpen } = useContext(PostModalContext);
  const [isFileLoaderOpen, setIsFileLoaderOpen] = useState(false);
  const currentPost = user.posts.find((post) => {
    return post._id === postId ? post : null;
  });

  const [data, setData] = useState(
    isEditing
      ? {
          text: currentPost.text,
          image: currentPost.image,
          userId: user._id,
          postId,
        }
      : { userId: user._id }
  );

  const onInputChange = (e) => {
    const value = e.target.value;
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
    isEditing ? dispatch(updatePostAsync(data)) : dispatch(createPostAsync(data));
    setData({ userId: '' });
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {}, []);
  return (
    <StyledPostModal>
      <div className='modal__wrapper'>
        <div className='modal__container'>
          <div className='modal__top'>
            <div className='title__container'>
              <h2 className='modal__title'>{isEditing ? 'Edit post' : 'Create post'}</h2>
              <button className='modal__close' onClick={closeModal}>
                <CloseIcon className='icon' />
              </button>
            </div>
          </div>
          <hr className='modal__hr' />
          <div className='modal__center'>
            <div className='modal__user-info'>
              <div className='avatar'>
                <img className='profile__picture' src='/assets/profile/man1.jpg' alt='user' />
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
                rows='8'
                value={data.text}
                placeholder={`What's on your mind, ${user.firstName}?`}
              ></textarea>
              {isFileLoaderOpen && (
                <input
                  className='modal__image'
                  type='text'
                  onChange={onInputChange}
                  name='image'
                  value={data.image}
                  placeholder='Add your photo/video'
                />
              )}
              <div className='modal__actions'>
                <span className='actions__text'>Add to your post</span>
                <ul className='actions__list'>
                  <li className='actions__item'>
                    <PhotoLibraryIcon className='icon image' onClick={handleInputFile} />
                  </li>
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
