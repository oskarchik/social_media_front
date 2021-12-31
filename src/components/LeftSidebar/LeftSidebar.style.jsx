import styled from 'styled-components';

export const StyledLeftSidebar = styled.aside`
  .sidebar__container {
    padding: 20px;

    .sidebar__list {
      margin: 0;
      padding: 0;
      list-style: none;
      margin-bottom: 20px;
      height: 200px;
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
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 50%;
        padding: 10px;
        background-color: #e4e6eb;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        cursor: pointer;
      }
    }
    .sidebar__hr {
      margin: 20px 0;
      background-color: lightgrey;
      border: 1px solid lightgrey;
    }
    .friends__list {
      margin: 0;
      padding: 0;
      list-style: none;
      .friends__item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
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
