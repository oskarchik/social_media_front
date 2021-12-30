import { useEffect, useState } from 'react';
import { StyledModal } from './Modal.style';
import { useDispatch } from 'react-redux';
import { signUpAsync } from '../../redux/slices/auth.slice';

import CloseIcon from '@mui/icons-material/Close';
import HelpIcon from '@mui/icons-material/Help';
import Picker from '../Picker/Picker';
import Checkbox from '../Checkbox/Checkbox';

const Modal = (props) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [date, setDate] = useState({ months: '', days: '', years: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData({ dateOfBirth: processDate(date) });
    await dispatch(signUpAsync(userData));
  };
  const processDate = (dObj) => {
    const keys = Object.values(dObj).join('/');
    var d = new Date(keys);
    return `${d.toLocaleString('en-us', { month: 'short' })}/${d.getDate()}/${d.getFullYear()}`;
  };

  const onInputChange = (e) => {
    const value = e.target.value;
    const targetId = e.target.id;
    if (e.target.checked) {
      setUserData({ [e.target.name]: targetId });
    }

    setDate(() => {
      return { ...date, [targetId]: value };
    });

    if (e.target.name !== 'dateOfBirth') setUserData({ ...userData, [e.target.name]: value.toLowerCase() });
  };

  const { handleForm } = props;

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const startingYear = '1905';
  useEffect(() => {
    setUserData({ ...userData, dateOfBirth: `${date.months}/${date.days}/${date.years}` });
  }, [date]);

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
              <input
                className='modal__input input__name'
                onChange={onInputChange}
                name='firstName'
                type='text'
                placeholder='First Name'
              />
              <input
                className='modal__input'
                onChange={onInputChange}
                name='lastName'
                type='text'
                placeholder='Last Name'
              />
            </div>
            <input
              className='modal__input'
              onChange={onInputChange}
              name='device'
              type='text'
              placeholder='Mobile number or email'
            />
            <input
              className='modal__input'
              onChange={onInputChange}
              name='password'
              type='password'
              placeholder='New password'
            />
            <div className='form-group__container'>
              <div className='form-group__top'>
                <p className='form-group__text'>Date of birth</p>
                <span className='help__container'>
                  <HelpIcon className='help__icon' />
                </span>
              </div>
              <div className='form-group__middle'>
                <Picker styled={'birth-date__select'} onInputChange={onInputChange} months={months} />
                <Picker styled={'birth-date__select'} onInputChange={onInputChange} days={days} />
                <Picker styled={'birth-date__select'} onInputChange={onInputChange} year={startingYear} />
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
                <Checkbox text={'Female'} onInputChange={onInputChange} styled={'checkbox__container'} />
                <Checkbox text={'Male'} onInputChange={onInputChange} styled={'checkbox__container'} />
                <Checkbox text={'Custom'} onInputChange={onInputChange} styled={'checkbox__container'} />
              </div>
            </div>

            <small className='form__legal'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa corporis modi voluptate quo odit
              architecto, error tempora dolor animi odio atque nemo officia adipisci fugit fuga velit id ipsam totam
              quam ab eveniet, corrupti aliquam deleniti? Et mollitia explicabo eaque!
            </small>
          </form>
          <button className='modal__submit' type='submit' onClick={handleSubmit}>
            Register
          </button>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
