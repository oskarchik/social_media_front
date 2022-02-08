import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Checkbox, Picker } from '../../components';

import { signUpAsync } from '../../redux/slices/user.slice';

import { Close, Help } from '@mui/icons-material';
import { StyledModal } from './Modal.style';

const Modal = ({ handleForm }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });
  const today = new Date();
  const month = today.toLocaleString('en-us', { month: 'short' });
  const day = today.getDate();
  const year = today.getFullYear();
  const [userData, setUserData] = useState({
    dateOfBirth: `${month}/${day}/${year}`,
  });
  const [date, setDate] = useState({ month, day, year });
  const [dateError, setDateError] = useState({ initial: 'initial error' });
  const [isTouched, setIsTouched] = useState(false);

  const onSubmit = async () => {
    if (Object.keys(dateError).length > 0) {
      setDateError({ error: 'you need to be over 18' });
      return;
    } else {
      await dispatch(signUpAsync(userData));
      handleForm();
      history.push('/auth');
    }
    return;
  };
  const processDate = () => {
    const keys = Object.values(date).join('/');
    var d = new Date(keys);

    if ((today - d) / 1000 / 60 / 60 / 24 / 365.3 < 18) {
      setDateError({ error: 'You need to be over 18 years old' });
      return;
    } else {
      setDateError({});
      return `${d.toLocaleString('en-us', { month: 'short' })}/${d.getDate()}/${d.getFullYear()}`;
    }
  };

  useEffect(() => {
    setUserData({ ...userData, dateOfBirth: Object.values(date).join('/') });
    setIsTouched(false);
  }, [date]);
  useEffect(() => {
    if (isTouched) {
      setDateError({});
      processDate();
    }
  }, [isTouched]);

  const onInputChange = (e) => {
    const value = e.target.value;
    const targetId = e.target.id;

    if (targetId !== 'day' && targetId !== 'month' && targetId !== 'year') {
      setUserData({ ...userData, [e.target.name]: value });
    }

    if (targetId === 'month' || targetId === 'day' || targetId === 'year') {
      setDate({ ...date, [targetId]: value });
      setIsTouched(true);
    }

    if (e.target.name !== 'dateOfBirth') setUserData({ ...userData, [e.target.name]: value.toLowerCase() });
  };

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
              <Close />
            </button>
          </div>
          <hr className='modal__hr' />
          <form className='modal__form' onSubmit={handleSubmit(onSubmit)}>
            <div className='input__inline'>
              <input
                className='modal__input input__name'
                onChange={onInputChange}
                id='firstName'
                name='firstName'
                type='text'
                placeholder='First Name'
              />
              <input
                className='modal__input'
                onChange={onInputChange}
                id='lastName'
                name='lastName'
                type='text'
                placeholder='Last Name'
              />
            </div>
            <input
              className='modal__input'
              style={errors.device && { border: '1px solid red' }}
              id='device'
              name='device'
              type='text'
              placeholder='Mobile number or email'
              {...register('device', {
                required: {
                  value: true,
                  message: 'Required field',
                },
                pattern: {
                  value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$|^\+[1-9]{1}[0-9]{3,14}$/,
                  message: 'Invalid email or phone number',
                },
                onChange: (e) => onInputChange(e),
              })}
              required
            />
            {errors.device && <span className='error__message'>{errors.device.message}</span>}
            <input
              className='modal__input'
              style={errors.password && { border: '1px solid red' }}
              onChange={onInputChange}
              id='password'
              name='password'
              type='password'
              placeholder='Password'
              {...register('password', {
                required: {
                  value: true,
                  message: 'Required field',
                },
                pattern: {
                  value: /[a-zA-Z0-9]{4,}$/,
                  message: 'Invalid password. Password should have at least 4 characters ',
                },
                onChange: (e) => onInputChange(e),
              })}
            />
            {errors.password && <span className='error__message'>{errors.password.message}</span>}
            <div className='form-group__container'>
              <div className='form-group__top'>
                <p className='form-group__text'>Date of birth</p>
                <span className='help__container'>
                  <Help className='help__icon' />
                </span>
              </div>
              <div className='form-group__middle'>
                <Picker
                  styled={'birth-date__select'}
                  onInputChange={onInputChange}
                  months={months}
                  error={{ border: '1px solid red' }}
                  setDateError={setDateError}
                  dateError={dateError}
                  processDate={processDate}
                />
                <Picker
                  styled={'birth-date__select'}
                  onInputChange={onInputChange}
                  days={days}
                  error={{ border: '1px solid red' }}
                  setDateError={setDateError}
                  dateError={dateError}
                  processDate={processDate}
                />
                <Picker
                  styled={'birth-date__select'}
                  onInputChange={onInputChange}
                  year={startingYear}
                  error={{ border: '1px solid red' }}
                  setDateError={setDateError}
                  dateError={dateError}
                  processDate={processDate}
                />
              </div>
              {dateError.error && <span className='error__message '>{dateError.error}</span>}
            </div>
            <div className='form-group__container'>
              <div className='form-group__top'>
                <p className='form-group__text'>Gender</p>
                <span className='help__container'>
                  <Help className='help__icon' />
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
          <button className='modal__submit' type='submit' onClick={handleSubmit(onSubmit)}>
            Register
          </button>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
