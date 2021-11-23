import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { StyledPost } from './Post.style';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
const Post = (props) => {
  // const { user } = useSelector((state) => state.user.user);
  const { post } = props;

  const [likesCounter, setLikesCounter] = useState(post?.likes?.length);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    !isLiked ? setLikesCounter((prevState) => prevState + 1) : setLikesCounter((prevState) => prevState - 1);
  };
  useEffect(() => {
    setIsLiked((prevState) => !prevState);
  }, [likesCounter]);

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
            <MoreHorizIcon />
          </div>
        </div>
        <div className='post__center'>
          {post && (
            <React.Fragment key={post?._id}>
              <span className='postText'>{post?.description}</span>
              {post.image && <img className='post__img' src={post?.image} alt='post' />}
            </React.Fragment>
          )}
        </div>
        <div className='post__bottom'>
          <div className='bottom__left'>
            <ThumbUpIcon className='post__icon like' onClick={likeHandler} />
            <FavoriteIcon className='post__icon fav' onClick={likeHandler} />
            <span className='counter'>{likesCounter} people like it</span>
          </div>
          <div className='bottom__right'>
            <span className='comments'>9 comments</span>
          </div>
        </div>
        <div className='buttons'>
          <button className='btn'>
            <ThumbUpOffAltIcon />
            <p className='btn__text'>Like</p>
          </button>
          <button className='btn'>
            <ChatBubbleOutlineIcon />
            <p className='btn__text'>Comments</p>
          </button>
          <button className='btn'>
            <ShareIcon />
            <p className='btn__text'>Share</p>
          </button>
        </div>
      </div>
    </StyledPost>
  );
};

export default Post;
