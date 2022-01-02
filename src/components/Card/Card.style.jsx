import styled from 'styled-components';

export const StyledCard = styled.div`
  .title {
    margin-bottom: 10px;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .card__avatar {
      /* flex: 1; */
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 10px;

      img {
        /* width: 100%; */
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .card__user {
      flex: 8;
      display: flex;
      align-items: center;
      justify-content: left;
    }
    .card__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      background-color: #e4e6eb;
      cursor: pointer;

      .icon {
        width: 20;
        height: 20px;
      }
    }
  }
`;
