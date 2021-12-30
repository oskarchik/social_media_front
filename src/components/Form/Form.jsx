import { useState } from 'react';

import { StyledForm } from './Form.style';
import { useDispatch } from 'react-redux';
import { signInAsync } from '../../redux/slices/auth.slice';
import { useHistory } from 'react-router-dom';
const Form = ({ handleForm }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});

  const onInputChange = (e) => {
    const value = e.target.value;
    setUserData({ ...userData, [e.target.name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(signInAsync(userData));
    history.push('/');
  };

  return (
    <StyledForm onSubmit={() => handleSubmit(userData)}>
      <div className='login-form__wrapper'>
        <input
          className='login__input'
          onChange={onInputChange}
          type='text'
          placeholder='Email or phone number'
          name='device'
        />
        <input className='login__input' onChange={onInputChange} type='email' placeholder='Password' name='password' />
        <button className='login__btn' type='submit' onClick={handleSubmit}>
          Log in
        </button>
        <a href='#' className='login__forgot'>
          Forgot password?
        </a>
        <hr className='login__hr' />
        <button className='login__new-account' onClick={handleForm}>
          Create a new account
        </button>
      </div>
    </StyledForm>
  );
};

export default Form;
