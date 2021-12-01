import styled from 'styled-components';

export const StyledPost = styled.div`
  .post__container {
    width: 100%;
    border-radius: 7px;
    background-color: white;
    -webkit-box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    margin: 30px 0;
    padding: 10px;
    position: relative;

    .post__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .top__left {
        display: flex;
        align-items: center;
        .profile__picture {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }
        .post__user-name {
          font-size: 15px;
          font-weight: 500;
          margin: 0 10px;
        }
        .post__date {
          font-size: 12px;
        }
      }
      .top__right {
        display: flex;
        cursor: pointer;
      }
    }
    .post__center {
      margin: 20px 0;
      .post__img {
        margin-top: 20px;
        width: 100%;
        max-height: 500px;
        object-fit: contain;
      }
    }
    .post__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid lightgrey;
      padding-bottom: 9px;
      .bottom__left {
        display: flex;
        align-items: center;

        .post__icon {
          color: white;
          border-radius: 50%;
          padding: 4px;
          margin: 2px;
          cursor: pointer;
        }
        .like {
          background-color: #1877f2;
        }
        .fav {
          background-color: red;
          margin-right: 6px;
        }
        .counter {
          font-size: 15px;
        }
      }
      .bottom__right {
        .comments {
          font-size: 15px;
          border-bottom: lightgrey dashed;
          cursor: pointer;
        }
      }
    }
    .buttons {
      margin: 8px 0;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .btn {
        width: 33%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: white;
        margin: 0 1px;
        padding: 4px;
        color: grey;
        cursor: pointer;
      }
      .btn:hover {
        background-color: #e2e4e6;
      }
      .btn__text {
        margin-left: 4px;
      }
    }
    .comments__container {
      width: 100%;
      .old-comments__container {
        border-top: 1px solid lightgrey;
        padding-top: 16px;
        margin-bottom: 10px;
        width: 100%;
        /* .sub-comment {
          margin-left: 20px;
        } */
      }
    }
    .add-comments__container {
      display: flex;
      align-items: center;

      .add-comments__avatar {
        width: 11%;
        display: flex;
        align-items: center;
        justify-content: center;
        .user__avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .add-comments__input {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;

        border-radius: 20px;
        .input {
          width: 100%;
          padding: 10px;
          border-radius: 20px;
          border: none;
          font-size: 14px;
          background-color: #f0f2f5;
          outline: none;
        }
        .icon {
          border: none;
          position: absolute;
          right: 10px;
          cursor: pointer;
        }
        .icon:hover {
          color: #1877f2;
        }
      }
    }
    .post__menu {
      width: 25%;
      display: flex;
      margin-right: 10px;
      padding: 20px 10px;
      background-color: white;
      position: absolute;
      top: 10px;
      right: 5%;
      -webkit-box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      -moz-box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
    }
  }
`;
