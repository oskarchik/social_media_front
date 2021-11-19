import styled from 'styled-components';

export const StyledRightSidebar = styled.aside`
  .right-sidebar__container {
    padding: 20px 20px 0 0;

    .birthday__container {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .birthday__img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
      .birthday__text {
        font-size: 15px;
      }
    }
    .ad__img {
      width: 100%;
      border-radius: 10px;
      margin: 0 0 30px 0;
    }
    .friends__title {
      margin-bottom: 10px;
    }
    .friends__list {
      margin: 0;
      padding: 0;
      max-height: 200px;
      list-style: none;
      overflow-y: scroll;
      .friends__item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        .profile-image__container {
          width: 100%;
          margin-right: 10px;
          position: relative;
          display: flex;
          align-items: center;
          .friends__image {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 10px;
          }
          .friends__online {
            width: 12px;
            height: 12px;
            background-color: #00c300;
            border-radius: 50%;
            border: 2px solid white;
            position: absolute;
            top: 0px;
            left: 25px;
          }
        }
      }
      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        background-color: white;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: lightgrey;
        border-radius: 5px;
      }
    }
  }
`;
