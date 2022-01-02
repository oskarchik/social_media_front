import styled from 'styled-components';

export const StyledMessengerPage = styled.div`
  .chat__menu {
    .menu__wrapper {
      width: 100%;
      min-width: 85px;
      .menu__title {
      }
      .menu__search {
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        margin: 0 10px 10px 0;
        padding-right: 10px;
        border-radius: 20px;
        background-color: #f0f2f5;
        .search__icon {
          margin-left: 10px;
          color: #7f8184;
          font-size: 20px;
        }
        .menu__input {
          width: 100%;
          height: 20px;
          border: none;
          background-color: #f0f2f5;
          font-size: 14px;
          outline: none;
        }
      }
      .conversation {
        display: flex;
        align-items: center;
        padding: 5px 0;
        border-radius: 5px;
        cursor: pointer;
      }
      .conversation:hover {
        background-color: #f2f3f5;
      }
    }
  }
  .chat__box {
    position: relative;
    width: 80%;
    height: calc(100vh - 50px);
    text-align: center;
    .chat-box__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .chat-box__top {
        padding-right: 10px;
        overflow-y: auto;
        overflow-x: hidden;
        .message {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .own {
          align-items: flex-end;
        }
        .own .message__text {
          background-color: #0084ff;
          color: white;
        }
        ::-webkit-scrollbar {
          width: 5px;
          background-color: white;
        }
        ::-webkit-scrollbar-track {
          border-radius: 5px;
          background-color: lightgrey;
        }
        ::-webkit-scrollbar-thumb {
          width: 2px;
          border-radius: 5px;
          background-color: #0084ff;
        }
      }

      .chat-box__bottom {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        margin-top: 10px;
        .chat-box__input {
          width: 90%;
          height: 40px;
          padding: 10px 0 0 10px;
          border: none;
          border-radius: 20px;
          background-color: #f0f2f5;
          color: #65676b;
          outline: none;
        }
        .chat-box__submit {
          display: flex;
          padding: 10px;
          border: none;
          border-radius: 50%;
          background-color: white;
          color: #0084ff;
          .icon {
          }
        }
        .chat-box__submit:hover {
          background-color: #f0f2f5;
        }
      }
    }
    .empty__chat {
      position: absolute;
      left: 0;
      top: 10%;
      width: 100%;
      color: #dbdcdd;
      font-size: 36px;
      text-align: center;
    }
  }
  .chat__online {
    width: 20vw;
    .online__wrapper {
    }
  }
  .menu__wrapper,
  .chat__wrapper,
  .online__wrapper {
    padding: 10px;
  }
`;
