import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post, Share } from '../../components';

import { getTimeLineAsync } from '../../redux/slices/post.slice';

import { StyledFeed } from './Feed.style';

const Feed = () => {
  const { user } = useSelector((state) => state.auth.user);
  const { posts, postDetails } = useSelector((state) => state.post);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimeLineAsync(user._id));
  }, [dispatch, postDetails]);

  return (
    <>
      <StyledFeed className='feed'>
        <div className='feed__container'>
          <Share setIsOpen={setIsOpen} />

          {posts.length > 0 &&
            posts?.map((post) => {
              return <Post post={post} key={post._id} />;
            })}
        </div>
      </StyledFeed>
    </>
  );
};

export default Feed;
