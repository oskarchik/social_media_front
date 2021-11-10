import styled from 'styled-components';

export const StyledProfile = styled.main`
  .profile__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .profile__header {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: white;
      border-bottom: 1px solid lightgrey;

      .profile__top {
        width: 100%;
        max-width: 940px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .cover__img {
          width: 100%;
          max-height: 348px;
          object-fit: cover;
          border-radius: 10px;
        }
        .user__img {
          max-width: 168px;
          height: 168px;
          border-radius: 50%;
          border: 4px solid white;
          object-fit: cover;
          position: absolute;
          bottom: -24px;
        }
        .btn__add-profile {
          width: 36px;
          height: 36px;
          background-color: #e4e6eb;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          border-radius: 50%;
          border: none;
          bottom: -10px;
          right: 388px;
        }
        .btn__add-cover {
          width: 160px;
          height: 40px;
          background-color: #e4e6eb;
          border-radius: 10px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 20px;
          right: 60px;
          .camera__icon {
            font-size: 20px;
          }
          .btn__add-photo-text {
            font-size: 14px;
            font-weight: bold;
            padding-top: 2px;
            margin-left: 4px;
          }
        }
      }
      .profile__name {
        width: 100%;
        max-width: 900px;
        text-align: center;
        margin-top: 40px;
        font-size: 24px;
        .name__hr {
          width: 100%;
          margin-top: 10px;
        }
      }
      .menu__container {
        width: 100%;
        max-width: 900px;
        display: flex;
        margin: 10px 0;
        .menu__links {
          flex: 7;
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .menu__item {
            .item__btn {
              min-width: 80px;
              height: 40px;
              padding: 4px;
              background-color: white;
              border: none;
              border-radius: 5px;
            }
            .item__btn:hover {
              background-color: #e4e6eb;
            }
          }
        }
        .menu__buttons {
          flex: 5;
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .buttons__item {
            display: flex;
            align-items: center;
            .buttons__btn {
              height: 36px;
              min-width: 40px;
              padding: 5px 20px;
              display: flex;
              align-items: center;
              justify-content: space-evenly;
              font-weight: bold;
              border: none;
              border-radius: 5px;
            }
            .add {
              background-color: #1877f2;
              color: white;
            }
            .buttons__icon {
              margin-right: 10px;
              font-size: 18px;
            }
          }
        }
      }
    }
    .profile__main {
      width: 900px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      margin-top: 20px;

      .left {
        flex: 4;
        margin-right: 20px;
      }
      .right {
        flex: 4;

        .main__photos {
          background-color: white;
          border-radius: 10px;
          -webkit-box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
            inset 0 0 0 1px rgba(255, 255, 255, 0.5);

          .photos__top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 10px;
            .photos__link {
              text-decoration: none;
            }
          }
          .photos__grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            padding: 10px;
            .grid__tile {
              border-radius: 10px;
              .photos__friends {
                width: 100%;
              }
            }
          }
          .photos__grid .grid__tile:first-child img {
            border-radius: 10px 0 0 0;
          }
          .photos__grid .grid__tile:nth-child(3) img {
            border-radius: 0 10px 0 0;
          }
          .photos__grid .grid__tile:nth-child(7) img {
            border-radius: 0 0 0 10px;
          }
          .photos__grid .grid__tile:last-child img {
            border-radius: 0 0 10px 0;
          }
        }
        .main__friends {
          background-color: white;
          border-radius: 10px;
          padding: 20px 10px;
          margin-top: 20px;
          -webkit-box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
            inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          .contacts__top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            .contacts__link {
              text-decoration: none;
            }
          }
          .contacts__grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 20px;
            .contacts__tile {
            }
            .contacts__picture {
              width: 100%;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
`;
