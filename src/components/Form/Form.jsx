import { StyledForm } from './Form.style';

const Form = (props) => {
  const { handleForm } = props;
  return (
    <StyledForm>
      <div className='login-form__wrapper'>
        <input className='login__input' type='text' placeholder='Email or phone number' />
        <input className='login__input' type='email' placeholder='Password' />
        <button className='login__btn' type='submit'>
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
