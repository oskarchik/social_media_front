import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comment from '../Comment/Comment';
import PostMenu from '../PostMenu/PostMenu';
import { StyledPost } from './Post.style';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

import { commentPostAsync } from '../../redux/slices/post.slice';
import { handlePostsLikesAsync, deletePostAsync, updatePostAsync } from '../../redux/slices/post.slice';

const Post = (props) => {
  const { user } = useSelector((state) => state.auth.user);
  const { post } = props;

  console.log('post', post);

  const dispatch = useDispatch();

  const [likesPostCounter, setLikesPostCounter] = useState(post?.likes?.length);
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [input, setInput] = useState('');
  const [isLiked, setIsLiked] = useState(post.likes?.some((like) => (like._id === user._id ? true : false)));
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleLikes = (postId, userId) => {
    const data = { postId, userId };
    dispatch(handlePostsLikesAsync(data));
    isLiked ? setLikesPostCounter((prevState) => prevState - 1) : setLikesPostCounter((prevState) => prevState + 1);
    setIsLiked((prevState) => !prevState);
  };

  const handleOpenComments = () => {
    setIsOpenComments((prevState) => !prevState);
  };
  const handleOpenMenu = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { postId: post._id, userId: user._id, text: input };
    dispatch(commentPostAsync(data));
    setInput('');
  };

  const deletePost = (postId, userId) => {
    const data = { postId, userId };
    dispatch(deletePostAsync(data));
  };
  const handleEditing = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <StyledPost>
      <div className='post__container'>
        <div className='post__top'>
          <div className='top__left'>
            <img className='profile__picture' src={post.userId?.avatar} alt='person' />
            {post && (
              <span className='post__user-name'>
                {post?.userId?.firstName} {post.userId?.lastName}
              </span>
            )}
            {post && <span className='post__date'>{post?.createdAt?.substring(0, post?.createdAt?.indexOf('T'))}</span>}
          </div>
          <div className='top__right'>
            <MoreHorizIcon onClick={handleOpenMenu} />
          </div>
        </div>
        <div className='post__center'>
          {post && (
            <React.Fragment key={post?._id}>
              <span className='postText'>{post?.text}</span>
              {post.image && <img className='post__img' src={post?.image} alt='post' />}
            </React.Fragment>
          )}
        </div>
        <div className='post__bottom'>
          <div className='bottom__left'>
            <ThumbUpIcon className='post__icon like' />
            <FavoriteIcon className='post__icon fav' />
            {likesPostCounter > 0 && (
              <span className='counter'>
                {likesPostCounter} {likesPostCounter === 1 ? 'person like it' : 'people like it'}
              </span>
            )}
          </div>
          <div className='bottom__right' onClick={handleOpenComments}>
            {post.totalComments === 1 && <span className='comments'>{post.totalComments} comment</span>}
            {post.totalComments > 1 && <span className='comments'>{post.totalComments} comments</span>}
          </div>
        </div>
        <div className='buttons'>
          <button className='btn' onClick={() => handleLikes(post._id, user._id)}>
            <ThumbUpOffAltIcon style={{ color: isLiked ? '#1877f2' : null }} />
            <p className='btn__text' style={{ color: isLiked ? '#1877f2' : null }}>
              Like
            </p>
          </button>
          <button className='btn' onClick={handleOpenComments}>
            <ChatBubbleOutlineIcon />
            <p className='btn__text'>Comment</p>
          </button>
          <button className='btn'>
            <ShareIcon />
            <p className='btn__text'>Share</p>
          </button>
        </div>
        {isOpenComments && (
          <div className='comments__container'>
            <div className='old-comments__container'>
              {post &&
                post.comments.map((comment) => {
                  return <Comment comment={comment} key={comment._id} />;
                })}
            </div>
            <div className='add-comments__container'>
              <div className='add-comments__avatar'>
                {user && <img className='user__avatar' src={user.avatar} alt='' />}
              </div>
              <form className='add-comments__input'>
                <input
                  className='input'
                  type='text'
                  placeholder='Write a comment...'
                  onChange={handleInputChange}
                  name='text'
                  value={input}
                />
                <button className='icon' type='submit' onClick={handleSubmit}>
                  <SendIcon />
                </button>
              </form>
            </div>
          </div>
        )}
        {isOpenMenu && (
          <div className='post__menu'>
            <PostMenu
              handleOpenMenu={handleOpenMenu}
              handleEditing={handleEditing}
              deletePost={deletePost}
              data={{ postId: post._id, userId: user._id }}
            />
          </div>
        )}
      </div>
    </StyledPost>
  );
};

export default Post;
