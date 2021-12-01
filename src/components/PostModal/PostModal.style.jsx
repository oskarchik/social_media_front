import styled from 'styled-components';

export const StyledPostModal = styled.div`
  .modal__wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.7);
    .modal__container {
      left: 0;
      right: 0;
      min-width: 40vw;
      min-height: 40vh;
      display: flex;

      flex-direction: column;
      align-items: center;
      background-color: white;
      border-radius: 5px;
      -webkit-box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      -moz-box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
      .modal__top {
        width: 100%;
        padding: 20px;

        .title__container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 65%;
          margin: 0 0 0 auto;

          .modal__title {
          }
          .modal__close {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            background-color: #e4e6eb;
            cursor: pointer;
            .icon {
              width: 30px;
              height: 30px;
              color: #606770;
            }
          }
        }
      }
      .modal__hr {
        width: 100%;
        height: 1px;
        background-color: #d8dade;
        border: none;
      }
      .modal__center {
        width: 100%;
        margin-top: 10px;
        padding: 10px;

        .modal__user-info {
          display: flex;
          align-items: center;
          padding-left: 10px;
          .avatar {
            .profile__picture {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              object-fit: cover;
              margin-right: 10px;
            }
          }
          .user__name {
            font-weight: 800;
          }
        }
        .modal__content {
          width: 100%;

          min-height: 300px;
          margin-top: 10px;
          padding-left: 10px;
          .modal__text {
            width: 100%;
            height: 80%;
            font-size: 24px;
            border: none;
            outline: none;
            overflow: scroll;
          }
          .modal__image {
            width: 100%;
            height: 32px;
            padding-left: 10px;
            border: none;
            border-radius: 5px;
            background-color: #f7f8fa;
            font-size: 18px;
            margin-top: 20px;
            outline: none;
          }
          .modal__actions {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 58px;
            margin-top: 20px;
            border: 1px solid #bcc0c4;
            border-radius: 5px;
            .actions__text {
              padding-left: 10px;
            }
            .actions__list {
              display: flex;
              align-items: center;
              justify-content: space-evenly;
              min-width: 150px;
              list-style: none;
              padding: 0;
              padding-right: 10px;
              margin: 0;
              .actions__item {
                height: 24px;
                .image {
                  color: #45bd62;
                }
                .person {
                  color: #1877f2;
                }
                .tag {
                  color: #f7b928;
                }
              }
            }
          }
          .modal__bottom {
            width: 100%;
            margin-top: 20px;
            /* padding: 10px; */
            .modal__btn {
              width: 100%;
              height: 36px;
              font-size: 16px;
              font-weight: 600;
              background-color: #e4e6eb;
              color: #bcc0c4;
              border: none;
              outline: none;
            }
            .modal__btn:hover {
              background-color: #1877f2;
              color: white;
            }
          }
        }
      }
    }
  }
`;
