import { useSelector } from 'react-redux';
import { StyledShare } from './Share.style';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import RoomIcon from '@mui/icons-material/Room';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import LabelIcon from '@mui/icons-material/Label';

const Share = () => {
  const { user } = useSelector((state) => state.user.user);
  return (
    <StyledShare>
      <div className='share__container'>
        <div className='share__top'>
          <img className='profile__picture' src={user?.avatar} alt='user' />
          <input type='text' className='share__input' placeholder={`what's in your mind, ${user?.firstName}?`} />
        </div>
        <hr className='shareHr' />
        <div className='share__bottom'>
          <div className='share__options'>
            <div className='option'>
              <PermMediaIcon className='share__icon media' />
              <span className='option_text'>Photo/Video</span>
            </div>
            <div className='option'>
              <RoomIcon className='share__icon location' />
              <span className='option_text'>Location</span>
            </div>
            <div className='option'>
              <LabelIcon className='share__icon label' />
              <span className='option_text'>Tag</span>
            </div>
            <div className='option'>
              <TagFacesIcon className='share__icon tag' />
              <span className='option_text'>Feeling/Activity</span>
            </div>
            <button className='share__btn'>Share</button>
          </div>
        </div>
      </div>
    </StyledShare>
  );
};

export default Share;
