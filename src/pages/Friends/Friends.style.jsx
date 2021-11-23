import styled from 'styled-components';

export const StyledFriendsPage = styled.main`
  .friends__sidebar {
    flex: 4;
    max-width: 400px;
    height: 100vh;
    padding: 15px;
    background-color: white;
    .icons__list {
      list-style: none;
      margin: 0;
      padding: 0;
      .icons__item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 50px;
        border-radius: 10px;
        cursor: pointer;

        .icon {
          max-width: 50px;
          background-color: #e4e6eb;
          width: 40px;
          height: 40px;
          padding: 5px;
          border-radius: 50%;
          border: none;
        }
        .icons__text {
          width: 90%;
          margin-left: 10px;
          font-size: 18px;
        }
      }
      .icons__item:hover {
        background-color: #dadde1;
      }
    }
  }
  .friends__container {
    flex: 9;
    padding: 40px 15px;
    border: 1px solid black;
  }
  .friends__grid {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    .request-card {
      margin-right: 5px;
    }
  }
`;
