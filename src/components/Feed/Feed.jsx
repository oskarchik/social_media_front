import { StyledFeed } from './Feed.style';
import Share from '../Share/Share';
import Post from '../Post/Post';
const Feed = () => {
  return (
    <StyledFeed>
      <div className='feed__container'>
        <Share />
        <Post />
      </div>
    </StyledFeed>
  );
};

export default Feed;
