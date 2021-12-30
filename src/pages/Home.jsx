import { useContext } from 'react';
import { useSelector } from 'react-redux';
import Feed from '../components/Feed/Feed';
import Header from '../components/Header/Header';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import PostModalContext from '../context/PostModalContext';
import PostModal from '../components/PostModal/PostModal';
import './Home.css';
const Home = () => {
  const { user } = useSelector((state) => state.auth.user);
  const { isOpen, setIsOpen, mode, setMode, postId, setPostId } = useContext(PostModalContext);

  return (
    <>
      <Header />
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
