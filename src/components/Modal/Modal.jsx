import { StyledModal } from './Modal.style';
import CloseIcon from '@mui/icons-material/Close';
import HelpIcon from '@mui/icons-material/Help';
import Picker from '../Picker/Picker';
import Checkbox from '../Checkbox/Checkbox';

const Modal = (props) => {
  const { handleForm } = props;
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const startingYear = '1905';

  return (
    <StyledModal>
      <div className='modal__wrapper'>
        <div className='modal__container'>
          <div className='modal__top'>
            <div className='title__container'>
              <h2 className='modal__title'>Register</h2>
              <p className='top__text'>It's quick and easy</p>
            </div>
            <button className='modal__close' onClick={handleForm}>
              <CloseIcon />
            </button>
          </div>
          <hr className='modal__hr' />
          <form className='modal__form'>
            <div className='input__inline'>
              <input className='modal__input input__name' type='text' placeholder='First Name' />
              <input className='modal__input' type='text' placeholder='Last Name' />
            </div>
            <input className='modal__input' type='text' placeholder='Mobile number or email' />
            <input className='modal__input' type='password' placeholder='New password' />
            <div className='form-group__container'>
              <div className='form-group__top'>
                <p className='form-group__text'>Date of birth</p>
                <span className='help__container'>
                  <HelpIcon className='help__icon' />
                </span>
              </div>
              <div className='form-group__middle'>
                <Picker styled={'birth-date__select'} months={months} />
                <Picker styled={'birth-date__select'} days={days} />
                <Picker styled={'birth-date__select'} year={startingYear} />
              </div>
            </div>
            <div className='form-group__container'>
              <div className='form-group__top'>
                <p className='form-group__text'>Gender</p>
                <span className='help__container'>
                  <HelpIcon className='help__icon' />
                </span>
              </div>
              <div className='form-group__middle'>
                <Checkbox text={'Female'} styled={'checkbox__container'} />
                <Checkbox text={'Male'} styled={'checkbox__container'} />
                <Checkbox text={'Custom'} styled={'checkbox__container'} />
              </div>
            </div>

            <small className='form__legal'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa corporis modi voluptate quo odit
              architecto, error tempora dolor animi odio atque nemo officia adipisci fugit fuga velit id ipsam totam
              quam ab eveniet, corrupti aliquam deleniti? Et mollitia explicabo eaque!
            </small>
          </form>
          <button className='modal__submit' type='submit'>
            Register
          </button>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
