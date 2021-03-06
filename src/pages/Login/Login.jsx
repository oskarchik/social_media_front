import { useState } from 'react';

import { StyledLoginPage } from './Login.style';
import { Form, Modal } from '../../components';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleForm = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <StyledLoginPage>
        <div className='login__container'>
          <div className='login__wrapper'>
            <div className='login__left'>
              <div className='left__content'>
                <h1 className='left__title'>Sf</h1>
                <h3 className='left__speech'>
                  Sf helps you communicate and share with the people who are part of your life.
                </h3>
              </div>
            </div>
            <div className='login__right'>
              <Form handleForm={handleForm} />
              <button className='login__new-account' onClick={handleForm}>
                Create a new account
              </button>
            </div>
          </div>
        </div>
      </StyledLoginPage>
      {isOpen && <Modal handleForm={handleForm} />}
    </>
  );
};

export default Login;
