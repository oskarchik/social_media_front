import { useContext } from 'react';
import { useSelector } from 'react-redux';
import Feed from '../components/Feed/Feed';
import Header from '../components/Header/Header';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import PostModalContext from '../context/PostModalContext';
import PostModal from '../components/PostModal/PostModal';
import './Home.css';
const Home = (props) => {
  const { user } = useSelector((state) => state.auth.user);
  const { isOpen, setIsOpen, isEditing, setIsEditing, postId, setPostId } = useContext(PostModalContext);

  // console.log('postId', postId);

  return (
    <>
      <Header />
      <div className='home__container'>
        <LeftSidebar className='left' />
        <Feed className='feed' />
        <RightSidebar className='right__sidebar' />
      </div>
      {isOpen && <PostModal className='post__modal' isEditing={isEditing ? isEditing : null} postId={postId} />}
    </>
  );
};

export default Home;
