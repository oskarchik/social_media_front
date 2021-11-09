import styled from 'styled-components';

export const StyledShare = styled.div`
  .share__container {
    width: 100%;
    height: 170px;
    border-radius: 7px;
    background-color: white;
    -webkit-box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    .share__top {
      display: flex;
      align-items: center;
      padding: 10px;
      .profile__picture {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
      }
      .share__input {
        border: none;
        border-radius: 20px;
        width: 80%;
        height: 40px;
        background-color: #f0f2f5;
        padding-left: 15px;
      }
      .share__input:focus {
        outline: none;
      }
    }
    .shareHr {
      margin: 20px;
    }
    .share__bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .share__options {
        display: flex;
        margin-left: 20px;
        .option {
          display: flex;
          align-items: center;
          margin-right: 15px;
          cursor: pointer;
          .share__icon {
            font-size: 18px;
            margin-right: 3px;
          }
          .media {
            color: #f3425f;
          }
          .location {
            color: #45bd62;
          }
          .label {
            color: #fbdc93;
          }
          .tag {
            color: orange;
          }
        }
        .share__btn {
          border: none;
          border-radius: 5px;
          padding: 8px;
          background-color: #1877f2;
          margin-right: 20px;
          cursor: pointer;
          color: white;
        }
      }
    }
  }
`;
