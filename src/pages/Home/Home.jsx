import { useContext } from 'react';

import { Feed, LeftSidebar, PostModal, RightSidebar } from '../../components';

import PostModalContext from '../../context/PostModalContext';

import './Home.css';

const Home = () => {
  const { isOpen, mode, postId } = useContext(PostModalContext);

  return (
    <>
      <div className='home__container'>
        <LeftSidebar className='left' />
        <Feed className='feed' />
        <RightSidebar className='right__sidebar' />
      </div>
      {isOpen && <PostModal className='post__modal' mode={mode} postId={postId} />}
    </>
  );
};

export default Home;
