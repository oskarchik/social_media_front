import styled from 'styled-components';

export const StyledHeader = styled.header`
  .header__container {
    height: 50px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;

    position: relative;
    top: 0;
    .logo__container {
      display: flex;
      align-items: center;
      flex: 3;
      .logo {
        font-size: 24px;
        margin: 0 10px;
        padding: 5px;
        font-weight: bold;
        background: linear-gradient(0deg, rgba(2, 104, 226, 1) 0%, rgba(67, 189, 254, 1) 81%);
        color: white;
        border-radius: 50%;
        cursor: pointer;
      }

      .searchbar__container {
        flex: 5;
        width: 70%;
        height: 30px;
        margin-right: 10px;
        background-color: #f0f2f5;
        border-radius: 20px;
        display: flex;
        align-items: center;
        .search__icon {
          font-size: 20px;
          margin-left: 10px;
          color: #7f8184;
        }
        .search__input {
          width: 70%;
          height: 20px;
          border: none;
          background-color: #f0f2f5;
          font-size: 11px;
          outline: none;
        }
      }
    }

    .links__container {
      flex: 6;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      color: white;

      .header__links {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .link {
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        font-size: 14px;
        position: relative;
        cursor: pointer;
        color: #6e7074;

        .anchor {
          text-decoration: none;
          color: #6e7074;
        }
        .anchor:hover {
          color: #1877f2;
        }
        .link__badge {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 14px;
          height: 14px;
          padding: 5px;
          position: absolute;
          top: -5px;
          right: 30px;
          background-color: red;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 600;
          color: white;
        }
      }
      .link:hover {
        color: #1877f2;
      }
    }
    .profile__container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex: 3;

      .profile__user {
        display: flex;
        align-items: center;

        .profile__picture {
          width: 32px;
          height: 32px;
          margin: 0 10px;
          border-radius: 50%;
          object-fit: cover;
          cursor: pointer;
        }
        .profile__name {
          color: black;
          font-size: 14px;
        }
      }
      .profile__links {
        display: flex;
        align-items: center;

        .link {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          font-size: 14px;
          position: relative;
          cursor: pointer;
          color: #6e7074;
        }
        .link:hover {
          color: #1877f2;
        }
        .logout {
          color: #6e7074;
          cursor: pointer;
        }
      }
    }
    .notifications {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      min-width: 200px;
      max-height: 300px;
      padding: 10px;
      overflow: auto;
      scroll-y: auto;
      /* background-color: red; */
      background-color: #f0f2f5;
      position: absolute;
      top: 50px;
      left: 50%;
      z-index: 1;
      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        background-color: white;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #0084ff;
        border-radius: 5px;
      }
      .notification__wrapper {
        text-align: center;
        .notification {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;

          .notification__avatar {
            width: 32px;
            height: 32px;
            margin: 0 10px;
            border-radius: 50%;
            object-fit: cover;
            cursor: pointer;
          }
          .notification__data {
            .notification__sender {
              display: block;
              /* font-size: 18px; */
              font-weight: 600;
            }
            /* .notification__msg {
              display: block;
              font-size: 14px;
            } */
          }
        }
        .notification__btn {
          width: 100px;
          height: 24px;
          margin: 10px 0;
          /* padding: 10px; */
          font-size: 12px;
          font-weight: 600;
          color: white;
          background-color: #0084ff;
          border: none;
          border-radius: 5px;
        }
        .notification__btn:hover {
          background-color: #007fef;
        }
        .notification__hr {
          width: 100%;

          background-color: #e4e6eb;
          margin-bottom: 10px;
        }
      }
    }
  }
`;
