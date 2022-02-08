import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signInAsync } from '../../redux/slices/user.slice';

import { StyledForm } from './Form.style';

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({ mode: 'onTouched' });

  const [userData, setUserData] = useState({});

  const onInputChange = (e) => {
    const value = e.target.value;
    if (errors.apiError) {
      clearErrors('apiError');
    }
    setUserData({ ...userData, [e.target.name]: value });
  };

  const onSubmit = async () => {
    const response = await dispatch(signInAsync(userData));

    response.payload.error ? setError('apiError', { message: response.payload.error }) : history.push('/');
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div className='login-form__wrapper'>
          <input
            className='login__input'
            style={errors.device && { border: '1px solid red' }}
            type='text'
            placeholder='Email or phone number'
            name='device'
            {...register('device', {
              required: {
                value: true,
                message: 'Required field',
              },
              pattern: {
                value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i,
                message: 'Invalid email format',
              },
              onChange: (e) => {
                onInputChange(e);
              },
            })}
          />
          {errors.device && <span className='error__message'>{errors.device.message}</span>}
          <input
            className='login__input'
            style={errors.password && { border: '1px solid red' }}
            type='password'
            placeholder='Password'
            name='password'
            {...register('password', {
              required: {
                value: true,
                message: 'Required field',
              },
              minLength: {
                value: 4,
                message: 'Password needs 4 characters at least',
              },
              onChange: (e) => onInputChange(e),
            })}
          />
          {errors.password && <span className='error__message'>{errors.password.message}</span>}
          <button className='login__btn' type='submit' onClick={handleSubmit(onSubmit)}>
            Log in
          </button>
          {errors.apiError && (
            <span className='error__message' style={{ margin: '-10px auto 10px auto' }}>
              {errors.apiError.message}
            </span>
          )}
          <a href='#' className='login__forgot'>
            Forgot password?
          </a>
          <hr className='login__hr' />
        </div>
      </StyledForm>
    </>
  );
};

export default Form;
