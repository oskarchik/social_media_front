import styled from 'styled-components';

export const StyledLeftSidebar = styled.aside`
  .sidebar__container {
    padding: 20px;

    .sidebar__list {
      height: 200px;
      margin: 0;
      padding: 0;
      margin-bottom: 20px;
      list-style: none;
      overflow: hidden;
      .sidebar__item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .sidebar__icon {
          margin-right: 15px;
        }
      }
    }
    .open {
      height: auto;
    }
    .more__container {
      display: flex;
      align-items: center;
      .sidebar__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        margin-right: 15px;
        padding: 10px;
        border: none;
        border-radius: 50%;
        background-color: #e4e6eb;
        cursor: pointer;
      }
    }
    .sidebar__hr {
      margin: 20px 0;
      border: 1px solid lightgrey;
      background-color: lightgrey;
    }
    .friends__list {
      margin: 0;
      padding: 0;
      list-style: none;
      .friends__item {
        margin-bottom: 15px;
        cursor: pointer;
        .friends__link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: black;
        }
        .friends__profile-pic {
          width: 32px;
          height: 32px;
          margin-right: 10px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
  }
`;
