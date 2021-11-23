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
      flex: 1;
      /* border: 1px solid black; */
      padding-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
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
      background-color: #e4e6eb;
      border-radius: 50%;
      border: none;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      /* border: 1px solid black; */

      .icon {
        height: 20px;
        width: 20;
      }
    }
  }
`;
