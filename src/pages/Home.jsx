import axios from 'axios';
import Feed from '../components/Feed/Feed';
import Header from '../components/Header/Header';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import './Home.css';
const Home = (props) => {
  console.log(props.user);
  return (
    <>
      <Header />
      <div className='home__container'>
        <LeftSidebar className='left' />
        <Feed className='feed' />
        <RightSidebar className='right__sidebar' />
      </div>
    </>
  );
};

export default Home;
