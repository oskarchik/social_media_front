import styled from 'styled-components';

export const StyledComment = styled.div`
  .old-comments__comment {
    display: flex;
    align-items: center;

    .old-comments__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10%;

      .user__avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .old-comments__content {
      position: relative;
      max-width: 600px;
      padding: 10px;
      border-radius: 20px;
      background-color: #f0f2f5;
      word-wrap: break-word;

      .old-comments__user-name {
        display: block;
        font-size: 14px;
        font-weight: 600;
      }
      .old-comments__text {
        display: block;
        position: relative;
        max-width: 100%;
        font-size: 14px;

        .comment__badge {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: absolute;
          top: 0px;
          right: -50px;
          padding: 2px 4px;
          border-radius: 20px;
          -webkit-box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
            inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          background-color: white;
          .badge__counter {
            font-size: 14px;
          }
          .badge__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 16px;
            height: 16px;
            margin-right: 5px;
            padding: 2px;
            border-radius: 50%;
            background-color: #1877f2;

            .icon {
              width: 100%;
              color: white;
            }
          }
        }
      }
    }
  }
  .old-comments__sub-comment {
    display: flex;
    align-items: center;
    margin-left: 35px;

    .old-comments__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10%;

      .user__avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .old-comments__content {
      max-width: 100%;
      padding: 10px;
      border-radius: 20px;
      background-color: #f0f2f5;

      .old-comments__user-name {
        display: block;
        font-size: 14px;
        font-weight: 600;
      }
      .old-comments__text {
        display: block;
        font-size: 14px;
        width: 100%;
      }
    }
    .comment__badge {
      display: flex;
    }
  }
  .old-comments__actions {
    margin-bottom: 5px;
    margin-left: 13%;
    font-size: 12px;
    .action {
      margin-right: 10px;
      font-weight: 600;
      cursor: pointer;
    }
  }
  .reply-comment__container {
    display: flex;
    align-items: center;
    margin: 0 0 15px 20px;
    .reply-comment__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10%;
      .reply-user__avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .reply-comment__content {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      border-radius: 20px;
      .reply-comment__input {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 20px;
        background-color: #f0f2f5;
        font-size: 14px;
        outline: none;
      }
      .icon {
        position: absolute;
        right: 10px;
        width: 18px;
        border: none;
        color: grey;
        cursor: pointer;
      }
      .icon:hover {
        color: #1877f2;
      }
    }
  }
`;
