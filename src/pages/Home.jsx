import Header from '../components/Header/Header';
import Feed from '../components/Feed/Feed';
const Home = () => {
  return (
    <>
      <Header />
      <div className='home__container'>
        <div>left sidebar</div>
        <Feed />
        <div>right sidebar</div>
      </div>
    </>
  );
};

export default Home;
