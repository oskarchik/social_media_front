import { StyledPost } from './Post.style';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
const Post = () => {
  return (
    <StyledPost>
      <div className='post__container'>
        <div className='post__top'>
          <div className='top__left'>
            <img className='profile__picture' src='/assets/profile/man1.jpg' alt='person' />
            <span className='post__user-name'>dsfg</span>
            <span className='post__date'>2 minutes ago</span>
          </div>
          <div className='top__right'>
            <MoreHorizIcon />
          </div>
        </div>
        <div className='post__center'>
          <span className='postText'>My first post</span>
          <img className='post__img' src='/assets/posts/food.jpg' alt='post' />
        </div>
        <div className='post__bottom'>
          <div className='bottom__left'>
            <ThumbUpIcon className='post__icon like' />
            <FavoriteIcon className='post__icon fav' />
            <span className='counter'>30 people like it</span>
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
