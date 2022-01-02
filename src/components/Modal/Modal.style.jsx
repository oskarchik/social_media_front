import styled from 'styled-components';

export const StyledModal = styled.div`
  .modal__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);

    .modal__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 440px;
      margin: 40px auto;
      border-radius: 5px;
      -webkit-box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      -moz-box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      background-color: white;
      .modal__top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        padding: 20px;
        .modal__title {
          margin-bottom: 10px;
          font-size: 30px;
          letter-spacing: 1px;
        }
        .top__text {
          color: #8a9096;
        }
        .modal__close {
          border: none;
          background-color: white;
          cursor: pointer;
        }
      }
      .modal__hr {
        width: 100%;
      }
      .modal__form {
        width: 100%;
        padding: 20px;
        .input__inline {
          display: flex;
          width: 100%;
          .input__name {
            margin-right: 10px;
          }
        }
        .form-group__container {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 5px 0;
          color: #606770;
          font-size: 14px;
        }
        .modal__input {
          width: 100%;
          height: 40px;
          margin: 5px 0;
          padding-left: 10px;
          border: 1px solid #ccd0d5;
          border-radius: 5px;
          background-color: #f5f6f7;
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
            padding-left: 10px;
            border: 1px solid #ccd0d5;
            border-radius: 5px;
            background-color: white;
            cursor: pointer;
          }
        }
        .form-group__middle .birth-date__select:nth-child(2) {
          margin: 0 10px;
        }

        .help__container {
          display: flex;
          align-items: center;
          width: 18px;
          height: 18px;
        }
        .help__icon {
          width: 16px;
        }
        .checkbox__container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 36px;
          padding: 0 10px;
          border: 1px solid #ccd0d5;
          border-radius: 5px;
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
`;
