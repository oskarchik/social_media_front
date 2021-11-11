import styled from 'styled-components';

export const StyledLoginPage = styled.main`
  .login__container {
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .login__wrapper {
      width: 60vw;
      max-width: 980px;
      display: flex;
    }
    .login__left {
      flex: 6;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .left__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: flex-start;

        .left__title {
          font-size: 60px;
          font-weight: bold;
          color: #1877f2;
          margin-bottom: 20px;
        }
        .left__speech {
          font-size: 24px;
        }
      }
    }
    .login__right {
      flex: 6;
      background-color: white;
      border-radius: 10px;
    }
  }
`;
