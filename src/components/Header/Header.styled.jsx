import styled from 'styled-components';

export const StyledHeader = styled.header`
  .header__container {
    height: 50px;
    width: 100%;
    /* background-color: #1877f2; */
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    .logo__container {
      flex: 3;
      .logo {
        font-size: 24px;
        margin-left: 20px;
        font-weight: bold;
        color: #1877f2;
        cursor: pointer;
      }
    }
    .searchbar__container {
      flex: 5;
      width: 100%;
      height: 30px;
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
      }
      .search__input:focus {
        outline: none;
      }
    }

    .links__container {
      flex: 4;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: white;
      .header__links {
        display: flex;
        justify-content: space-space-between;
        align-items: center;
      }
      .link {
        margin-right: 10px;
        font-size: 14px;
        cursor: pointer;
        color: #1877f2;
      }
      .link--home {
        font-size: 14px;
      }
      .header__icons {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .icon__item {
          margin-right: 10px;
          font-size: 14px;
          cursor: pointer;
          position: relative;
          color: #1877f2;
          .icon__badge {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 12px;
            height: 12px;
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: red;
            border-radius: 50%;
            font-size: 8px;
            color: white;
          }
        }
      }
      .profile__picture {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }
`;
