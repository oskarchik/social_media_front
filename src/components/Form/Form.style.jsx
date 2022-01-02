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
      margin-bottom: 20px;
      padding-left: 20px;
      border: 1px solid lightgrey;
      border-radius: 5px;
      color: #6e7074;
      font-size: 18px;
      outline: none;
    }
    .login__btn {
      width: 90%;
      height: 48px;
      margin-bottom: 20px;
      border-radius: 5px;
      border: none;
      background-color: #1877f2;
      color: white;
      font-size: 26px;
      font-weight: bold;
      cursor: pointer;
    }
    .login__forgot {
      margin-bottom: 20px;
      text-decoration: none;
    }
    .login__hr {
      width: 90%;
      height: 1px;
      margin-bottom: 20px;
    }
    .login__new-account {
      width: 200px;
      height: 48px;
      border: none;
      border-radius: 5px;
      background-color: #42b72a;
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
