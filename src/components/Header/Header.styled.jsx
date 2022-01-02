import styled from 'styled-components';

export const StyledHeader = styled.header`
  .header__container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 50px;
    background-color: white;

    .logo__container {
      display: flex;
      align-items: center;
      width: 20vw;
      min-width: 90px;
      .logo {
        margin: 0 5px;
        padding: 5px;
        border-radius: 50%;
        background: linear-gradient(0deg, rgba(2, 104, 226, 1) 0%, rgba(67, 189, 254, 1) 81%);
        color: white;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
      }

      .searchbar__container {
        display: flex;
        align-items: center;
        width: 70%;
        height: 30px;
        margin-right: 10px;
        padding-right: 10px;
        border-radius: 20px;
        background-color: #f0f2f5;
        .search__icon {
          margin-left: 10px;
          color: #7f8184;
          font-size: 20px;
        }
        .search__input {
          width: 100%;
          height: 20px;
          border: none;
          background-color: #f0f2f5;
          font-size: 11px;
          outline: none;
        }
      }
    }

    .links__container {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      color: white;

      .header__links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 2vw;
        .link {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 7vw;
          min-width: 24px;
          margin-right: 5px;
          color: #6e7074;
          font-size: 14px;
          cursor: pointer;

          .anchor {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6e7074;
            text-decoration: none;
          }
          .anchor:hover {
            color: #1877f2;
          }
          .active {
            width: 100%;
            border-bottom: 3px solid #1877f2;
            color: #1877f2;
          }
          .link__badge {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -5px;
            right: 30px;
            width: 14px;
            height: 14px;
            padding: 5px;
            border-radius: 50%;
            background-color: red;
            color: white;
            font-size: 10px;
            font-weight: 600;
          }
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
      width: 20vw;

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
        padding-right: 10px;

        .link {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-right: 10px;
          font-size: 14px;
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
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      position: absolute;
      top: 50px;
      left: 50%;
      min-width: 200px;
      max-height: 300px;
      padding: 10px;
      background-color: #f0f2f5;
      overflow: auto;
      scroll-y: auto;
      z-index: 1;
      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        border-radius: 5px;
        background-color: white;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #0084ff;
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
              font-weight: 600;
            }
          }
        }
        .notification__btn {
          width: 100px;
          height: 24px;
          margin: 10px 0;
          border: none;
          border-radius: 5px;
          background-color: #0084ff;
          color: white;
          font-size: 12px;
          font-weight: 600;
        }
        .notification__btn:hover {
          background-color: #007fef;
        }
        .notification__hr {
          width: 100%;
          margin-bottom: 10px;
          background-color: #e4e6eb;
        }
      }
    }
  }
  @media (max-width: 700px) {
    .header__container {
      justify-content: center;
    }
    .profile__picture {
      margin: 0;
    }
    .profile__links {
      .link {
        margin: 0;
      }
    }
  }
`;
