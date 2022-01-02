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
        border-radius: 10px;
        background-color: white;
      }
    }
    @media (max-width: 700px) {
      .login__wrapper {
        flex-direction: column-reverse;
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
