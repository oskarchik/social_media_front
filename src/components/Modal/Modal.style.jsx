import styled from 'styled-components';

export const StyledModal = styled.div`
  .modal__wrapper {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.7);

    .modal__container {
      left: 0;
      right: 0;
      width: 440px;
      display: flex;
      margin: 40px auto;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 5px;
      -webkit-box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      -moz-box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      .modal__top {
        width: 100%;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .modal__title {
          margin-bottom: 10px;
          font-size: 30px;
          letter-spacing: 1px;
        }
        .top__text {
          color: #8a9096;
        }
        .modal__close {
          background-color: white;
          border: none;
          cursor: pointer;
        }
      }
      .modal__hr {
        width: 100%;
      }
      .modal__form {
        padding: 20px;
        width: 100%;
        .input__inline {
          width: 100%;
          display: flex;
          .input__name {
            margin-right: 10px;
          }
        }
        .form-group__container {
          width: 100%;
          font-size: 14px;
          color: #606770;
          display: flex;
          flex-direction: column;
          padding: 5px 0;
        }
        .modal__input {
          width: 100%;
          height: 40px;
          padding-left: 10px;
          margin: 5px 0;
          background-color: #f5f6f7;
          border: 1px solid #ccd0d5;
          border-radius: 5px;
          font-size: 16px;
          outline: none;
        }

        .form-group__top {
          display: flex;
          align-items: center;
          .form-group__text {
            margin-right: 5px;
          }
        }

        .form-group__middle {
          display: flex;
          justify-content: space-between;
          .birth-date__select {
            width: 100%;
            height: 36px;
            border-radius: 5px;
            border: 1px solid #ccd0d5;
            padding-left: 10px;
            background-color: white;
            cursor: pointer;
          }
        }
        .form-group__middle .birth-date__select:nth-child(2) {
          margin: 0 10px;
        }

        .help__container {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
        }
        .help__icon {
          width: 16px;
        }
        .checkbox__container {
          width: 100%;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 5px;
          border: 1px solid #ccd0d5;
          padding: 0 10px;
          background-color: white;
          cursor: pointer;
        }
        .form-group__middle .checkbox__container:nth-child(2) {
          margin: 0 10px;
        }
        .form__legal {
          color: grey;
        }
      }
      .modal__submit {
        width: 200px;
        height: 36px;
        margin-bottom: 20px;
        background-color: #42b72a;
        color: white;
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        cursor: pointer;
      }
    }
  }
`;
