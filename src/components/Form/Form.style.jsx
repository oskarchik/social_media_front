import styled from 'styled-components';

export const StyledForm = styled.form`
  .login-form__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    .login__input {
      display: block;
      width: 90%;
      height: 64px;
      border-radius: 5px;
      border: 1px solid lightgrey;
      margin-bottom: 20px;
      font-size: 18px;
      color: #6e7074;
      padding-left: 20px;
      outline: none;
    }
    .login__btn {
      width: 90%;
      height: 48px;
      border-radius: 5px;
      border: none;
      background-color: #1877f2;
      color: white;
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 20px;
      cursor: pointer;
    }
    .login__forgot {
      text-decoration: none;
      margin-bottom: 20px;
    }
    .login__hr {
      margin-bottom: 20px;
      height: 1px;
      width: 90%;
    }
    .login__new-account {
      width: 200px;
      height: 48px;
      background-color: #42b72a;
      color: white;
      font-size: 16px;
      font-weight: bold;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }
  }
`;
