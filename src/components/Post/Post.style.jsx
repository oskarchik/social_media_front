import styled from 'styled-components';

export const StyledPost = styled.div`
  .post__container {
    position: relative;
    width: 100%;
    margin: 30px 0;
    padding: 10px;
    border-radius: 7px;
    -webkit-box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    background-color: white;
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
          margin: 0 10px;
          font-size: 15px;
          font-weight: 500;
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
        width: 100%;
        max-height: 500px;
        margin-top: 20px;
        object-fit: contain;
      }
      .shared__post {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin: 10px 0;

        .image__container {
          width: 100%;
          height: 120px;
          .shared__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .shared__text {
          width: 98%;
          padding: 10px 0 10px 10px;
          border: 1px solid #d5d5d5;
          border-radius: 0 0 2px 2px;
          color: #757575;
          font-size: 12px;
        }
      }
    }
    .post__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 9px;
      border-bottom: 1px solid lightgrey;
      .bottom__left {
        display: flex;
        align-items: center;
        .post__icon {
          margin: 2px;
          padding: 4px;
          border-radius: 50%;
          color: white;
        }
        .like {
          background-color: #1877f2;
        }
        .fav {
          margin-right: 6px;
          background-color: red;
        }
        .counter {
          font-size: 15px;
        }
      }
      .bottom__right {
        .comments {
          border-bottom: lightgrey dashed;
          font-size: 15px;
          cursor: pointer;
        }
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin: 8px 0;
      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33%;
        margin: 0 1px;
        padding: 4px;
        border: none;
        background-color: white;
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
        width: 100%;
        margin-bottom: 10px;
        padding-top: 16px;
        border-top: 1px solid lightgrey;
      }
    }
    .add-comments__container {
      display: flex;
      align-items: center;

      .add-comments__avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11%;
        .user__avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .add-comments__input {
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        border-radius: 20px;
        .input {
          width: 100%;
          padding: 10px;
          border-radius: 20px;
          border: none;
          background-color: #f0f2f5;
          font-size: 14px;
          outline: none;
        }
        .icon {
          position: absolute;
          right: 10px;
          border: none;
          cursor: pointer;
        }
        .icon:hover {
          color: #1877f2;
        }
      }
    }
    .post__menu {
      display: flex;
      position: absolute;
      top: 10px;
      right: 5%;
      width: 25%;
      margin-right: 10px;
      padding: 20px 10px;
      -webkit-box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      -moz-box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      background-color: white;
    }
  }
`;
