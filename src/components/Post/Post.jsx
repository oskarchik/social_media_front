import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'timeago.js';

import { Comment, PostMenu } from '../../components';

import PostModalContext from '../../context/PostModalContext';
import { commentPostAsync } from '../../redux/slices/post.slice';
import { handlePostsLikesAsync, deletePostAsync, updatePostAsync, sharePostAsync } from '../../redux/slices/post.slice';

import { ChatBubbleOutline, Favorite, MoreHoriz, Send, Share, ThumbUp, ThumbUpOffAlt } from '@mui/icons-material';

import { StyledPost } from './Post.style';

const Post = ({ post }) => {
  const { user } = useSelector((state) => state.auth.user);
  const { postDetails } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  const [likesPostCounter, setLikesPostCounter] = useState(post?.likes?.length);
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [input, setInput] = useState('');
  const [isLiked, setIsLiked] = useState(post.likes?.some((like) => (like._id === user._id ? true : false)));
  const { isOpen, setIsOpen, mode, setMode, postId, setPostId } = useContext(PostModalContext);

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
    setMode('Edit');
  };
  const handleShare = (postId, userId) => {
    const data = { postId, userId };
    dispatch(sharePostAsync(data));
  };

  const handleOpenSharePost = () => {
    setIsOpen((prevState) => !prevState);
    setPostId(post._id);
    setMode('Share');
  };

  return (
    <StyledPost>
      <div className='post__container'>
        <div className='post__top'>
          <div className='top__left'>
            <img
              className='profile__picture'
              src={post.userId?.avatar || '/assets/profile/default_profile.png'}
              alt='person'
            />
            {post && (
              <span className='post__user-name'>
                {post?.userId?.firstName} {post.userId?.lastName}
              </span>
            )}
            {post && <span className='post__date'>{format(post?.createdAt)}</span>}
          </div>
          {post.userId._id === user._id && (
            <div className='top__right'>
              <MoreHoriz onClick={handleOpenMenu} />
            </div>
          )}
        </div>
        <div className='post__center'>
          {post && (
            <React.Fragment key={post?._id}>
              <span className='postText'>{post?.text}</span>
              {post.image && <img className='post__img' src={post?.image} alt='post' />}
            </React.Fragment>
          )}
          {post.postRef && (
            <div className='shared__post'>
              {post.postRef?.image && (
                <div className='image__container'>
                  <img className='shared__image' src={post.postRef?.image} alt='post' />
                </div>
              )}
              {post.postRef?.text && <div className='shared__text'>{post.postRef?.text}</div>}
            </div>
          )}
        </div>
        <div className='post__bottom'>
          <div className='bottom__left'>
            <ThumbUp className='post__icon like' />
            <Favorite className='post__icon fav' />
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
            <ThumbUpOffAlt style={{ color: isLiked ? '#1877f2' : null }} />
            <p className='btn__text' style={{ color: isLiked ? '#1877f2' : null }}>
              Like
            </p>
          </button>
          <button className='btn' onClick={handleOpenComments}>
            <ChatBubbleOutline />
            <p className='btn__text'>Comment</p>
          </button>
          <button className='btn' onClick={handleOpenSharePost}>
            <Share />
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
                  <Send />
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
