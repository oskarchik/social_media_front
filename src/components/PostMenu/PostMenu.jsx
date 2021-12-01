import { useContext } from 'react';
import { StyledPostMenu } from './PostMenu.style';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

import PostModalContext from '../../context/PostModalContext';

const PostMenu = (props) => {
  const { handleOpenMenu, deletePost, data } = props;
  const { isOpen, setIsOpen, isEditing, setIsEditing, postId, setPostId } = useContext(PostModalContext);

  const handleEditMenu = () => {
    setIsOpen((prevState) => !prevState);
    handleOpenMenu((prevState) => !prevState);
    setIsEditing((prevState) => !prevState);
    setPostId(data.postId);
  };

  return (
    <StyledPostMenu>
      <div className='menu__close' onClick={handleOpenMenu}>
        <CloseIcon className='icon' />
      </div>
      <div className='menu__delete' onClick={() => deletePost(data.postId, data.userId)}>
        <DeleteIcon className='icon' />
        <p className='text'>Delete post</p>
      </div>
      <div className='menu__edit' onClick={handleEditMenu}>
        <EditIcon className='icon' />
        <p>Edit Post</p>
      </div>
    </StyledPostMenu>
  );
};

export default PostMenu;
