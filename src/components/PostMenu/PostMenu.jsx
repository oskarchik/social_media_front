import { useContext, useEffect } from 'react';

import PostModalContext from '../../context/PostModalContext';

import { Close, Delete, Edit } from '@mui/icons-material';

import { StyledPostMenu } from './PostMenu.style';

const PostMenu = ({ handleOpenMenu, deletePost, data }) => {
  const { setIsOpen, setMode, setPostId } = useContext(PostModalContext);

  const handleEditMenu = () => {
    setIsOpen((prevState) => !prevState);
    handleOpenMenu((prevState) => !prevState);
    setMode('Edit');

    setPostId(data.postId);
  };

  useEffect(() => {
    setPostId(data.postId);
  }, []);

  return (
    <StyledPostMenu>
      <div className='menu__close' onClick={handleOpenMenu}>
        <Close className='icon' />
      </div>
      <div className='menu__delete' onClick={() => deletePost(data.postId, data.userId)}>
        <Delete className='icon' />
        <p className='text'>Delete post</p>
      </div>
      <div className='menu__edit' onClick={handleEditMenu}>
        <Edit className='icon' />
        <p>Edit Post</p>
      </div>
    </StyledPostMenu>
  );
};

export default PostMenu;
