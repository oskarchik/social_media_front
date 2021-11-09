import styled from 'styled-components';

export const StyledHeader = styled.header`
  .header__container {
    height: 50px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;

    position: sticky;
    top: 0;
    .logo__container {
      display: flex;
      align-items: center;
      flex: 3;
      .logo {
        font-size: 24px;
        margin: 0 10px;
        padding: 5px;
        font-weight: bold;
        background: linear-gradient(0deg, rgba(2, 104, 226, 1) 0%, rgba(67, 189, 254, 1) 81%);
        color: white;
        border-radius: 50%;
        cursor: pointer;
      }

      .searchbar__container {
        flex: 5;
        width: 70%;
        height: 30px;
        margin-right: 10px;
        background-color: #f0f2f5;
        border-radius: 20px;
        display: flex;
        align-items: center;
        .search__icon {
          font-size: 20px;
          margin-left: 10px;
          color: #7f8184;
        }
        .search__input {
          width: 70%;
          height: 20px;
          border: none;
          background-color: #f0f2f5;
          font-size: 11px;
        }
        .search__input:focus {
          outline: none;
        }
      }
    }

    .links__container {
      flex: 6;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      color: white;

      .header__links {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .link {
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        font-size: 14px;
        position: relative;
        cursor: pointer;
        color: #6e7074;
        .link__badge {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 12px;
          height: 12px;
          position: absolute;
          top: -5px;
          right: 30px;
          background-color: red;
          border-radius: 50%;
          font-size: 8px;
          color: white;
        }
      }
      .link:hover {
        color: #1877f2;
      }
    }
    .profile__container {
      display: flex;
      align-items: center;
      flex: 3;
      /* border: 1px solid black; */
      .profile__picture {
        width: 32px;
        height: 32px;
        margin: 0 10px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
      }
      .profile__name {
        color: black;
        font-size: 14px;
      }
    }
  }
`;
