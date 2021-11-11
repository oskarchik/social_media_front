import { useEffect, useState } from 'react';
import { StyledLoginPage } from './Login.style';
import Form from '../../components/Form/Form';
import Modal from '../../components/Modal/Modal';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
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
              <Form handleForm={handleForm} />
            </div>
          </div>
        </div>
      </StyledLoginPage>
      {isOpen && <Modal handleForm={handleForm} />}
    </>
  );
};

export default Login;
