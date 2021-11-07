import styled from 'styled-components';

export const StyledPost = styled.div`
  .post__container {
    width: 100%;
    border-radius: 7px;
    -webkit-box-shadow: 5px 2px 15px 1px rgba(0, 0, 0, 0.55);
    box-shadow: 5px 2px 15px 1px rgba(0, 0, 0, 0.55);
    margin: 30px 0;
    padding: 10px;
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
        }
        .counter {
          font-size: 15px;
        }
      }
      .bottom__right {
        .comments {
          font-size: 15px;
          border-bottom: lightgrey dashed;
        }
      }
    }
    .buttons {
      margin-top: 8px;
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
      }
      .btn:hover {
        background-color: #e2e4e6;
      }
      .btn__text {
        margin-left: 4px;
      }
    }
  }
`;
