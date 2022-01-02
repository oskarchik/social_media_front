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
      margin: 0 0 30px 0;
      border-radius: 10px;
    }
    .friends__title {
      margin-bottom: 10px;
    }
    .friends__list {
      max-height: 200px;
      margin: 0;
      padding: 0;
      list-style: none;
      overflow-y: scroll;
      overflow-x: hidden;
      .friends__item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        .profile-image__container {
          display: flex;
          align-items: center;
          position: relative;
          width: 100%;
          margin-right: 10px;
          .friends__image {
            width: 32px;
            height: 32px;
            margin-right: 10px;
            border-radius: 50%;
            object-fit: cover;
          }
          .friends__online {
            position: absolute;
            top: 0px;
            left: 25px;
            width: 12px;
            height: 12px;
            border: 2px solid white;
            border-radius: 50%;
            background-color: #00c300;
          }
        }
      }
      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        border-radius: 5px;
        background-color: white;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: lightgrey;
      }
    }
  }
`;
