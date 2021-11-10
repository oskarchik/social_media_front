import { StyledLoginPage } from './Login.style';
import Form from '../../components/Form/Form';

const Login = () => {
  return (
    <StyledLoginPage>
      <div className='login__container'>
        <div className='login__wrapper'>
          <div className='login__left'>
            <div className='left__content'>
              <h1 className='left__title'>Lg</h1>
              <h3 className='left__speech'>
                Lg helps you communicate and share with the people who are part of your life.
              </h3>
            </div>
          </div>
          <div className='login__right'>
            <Form />
          </div>
        </div>
      </div>
    </StyledLoginPage>
  );
};

export default Login;
