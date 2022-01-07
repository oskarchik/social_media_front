import styled from 'styled-components';

export const StyledLoginPage = styled.main`
  .login__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;

    .login__wrapper {
      display: flex;
      width: 60vw;
      max-width: 980px;
      .login__left {
        flex: 6;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 20px;

        .left__content {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: flex-start;
          width: 100%;
          .left__title {
            margin-bottom: 20px;
            color: #1877f2;
            font-size: 60px;
            font-weight: bold;
          }
          .left__speech {
            font-size: 24px;
          }
        }
      }
      .login__right {
        flex: 6;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: white;
        .error__message {
          color: red;
          font-size: 12px;
        }
        .login__new-account {
          width: 200px;
          height: 48px;
          margin: -15px 0 10px 0;
          border: none;
          border-radius: 5px;
          background-color: #42b72a;
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
    @media (max-width: 700px) {
      .login__wrapper {
        flex-direction: column-reverse;
        margin-top: 25%;
        .login__left {
          margin-top: 20px;
          margin-right: 0;
          .left__content {
            align-items: center;
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
`;
