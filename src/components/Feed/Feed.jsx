import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledFeed } from './Feed.style';

import Share from '../Share/Share';
import Post from '../Post/Post';

import { getTimeLineAsync } from '../../redux/slices/post.slice';
import { useState } from 'react';
const Feed = () => {
  const { user } = useSelector((state) => state.auth.user);
  const { posts } = useSelector((state) => state.post);

  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimeLineAsync(user._id));
  }, [dispatch]);

  return (
    <>
      <StyledFeed className='feed'>
        <div className='feed__container'>
          <Share setIsOpen={setIsOpen} />

          {posts &&
            posts?.map((post) => {
              return <Post post={post} key={post._id} />;
            })}
        </div>
      </StyledFeed>
    </>
  );
};

export default Feed;
