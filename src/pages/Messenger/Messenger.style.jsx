import styled from 'styled-components';

export const StyledMessengerPage = styled.div`
  .chat__menu {
    .menu__wrapper {
      flex: 3;
      .menu__title {
      }
      .menu__search {
        width: 90%;
        height: 30px;
        margin: 0 10px 10px 0;
        background-color: #f0f2f5;
        border-radius: 20px;
        display: flex;
        align-items: center;
        .search__icon {
          font-size: 20px;
          margin-left: 10px;
          color: #7f8184;
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
    flex: 6;
    text-align: center;
    position: relative;
    height: calc(100vh - 50px);
    .chat-box__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .chat-box__top {
        padding-right: 10px;
        overflow-y: auto;
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
          background-color: lightgrey;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #0084ff;
          width: 2px;
          border-radius: 5px;
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
          color: #65676b;
          background-color: #f0f2f5;
          border: none;
          border-radius: 20px;
          padding: 10px 0 0 10px;
          outline: none;
        }
        .chat-box__submit {
          display: flex;
          background-color: white;
          color: #0084ff;
          border: none;
          border-radius: 50%;
          padding: 10px;
          .icon {
          }
        }
        .chat-box__submit:hover {
          background-color: #f0f2f5;
        }
      }
    }
    .empty__chat {
      width: 100%;

      position: absolute;
      left: 0;
      top: 10%;
      font-size: 36px;
      text-align: center;
      color: #dbdcdd;
    }
  }
  .chat__online {
    flex: 3;
    .online__wrapper {
    }
  }
  .menu__wrapper,
  .chat__wrapper,
  .online__wrapper {
    padding: 10px;
  }
`;
