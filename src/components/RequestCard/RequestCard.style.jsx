import styled from 'styled-components';

export const StyledRequestCard = styled.div`
  .request-card__wrapper {
    width: 200px;
    max-height: 350px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
    box-shadow: 0px 5px 15px -4px rgba(0, 0, 0, 0.48);
    background-color: white;
    .request-card__img {
      width: 100%;
      height: 200px;
      margin: 10px 0;

      .profile__img {
        width: 100%;
        height: 100%;
        border-radius: 10px 10px;
        object-fit: cover;
      }
    }
    .request-card__name {
      margin: 10px;
    }
    .request-card__buttons {
      display: flex;
      flex-direction: column;
      padding: 10px;
      .btn {
        width: 100%;
        min-height: 36px;
        margin: 2.5px 0;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      .request-card__confirm {
        background-color: #1b74e4;
        color: white;
        font-size: 14px;
        font-weight: 600;
      }
      .request-card__confirm:hover {
        background-color: #1877f2;
      }
      .request-card__remove {
        background-color: #e4e6eb;
        font-size: 14px;
        font-weight: 600;
      }
      .request-card__remove:hover {
        background-color: #dadde1;
      }
    }
  }
`;
