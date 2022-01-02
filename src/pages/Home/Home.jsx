import { useContext } from 'react';

import { Feed, LeftSidebar, PostModal, RightSidebar } from '../../components';

import PostModalContext from '../../context/PostModalContext';
import { useViewport } from '../../hooks/useViewport';

import './Home.css';

const Home = () => {
  const { isOpen, mode, postId } = useContext(PostModalContext);
  const { width } = useViewport();
  const breakpoint = 700;

  return (
    <>
      <div className='home__container'>
        {width > breakpoint && <LeftSidebar />}
        <Feed />
        {width > breakpoint - 150 && <RightSidebar />}
      </div>
      {isOpen && <PostModal className='post__modal' mode={mode} postId={postId} />}
    </>
  );
};

export default Home;
