import styled from 'styled-components';

export const StyledProfile = styled.main`
  .profile__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    .upload__container {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(255, 255, 255, 0.7);
      z-index: 2;
      .image__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .upload__avatar {
          width: 288px;
          height: 288px;
          border: 4px solid white;
          border-radius: 50%;
          object-fit: cover;
        }
        .upload__cover {
          width: 100%;
          max-width: 688px;
          max-height: 688px;
          border: 4px solid white;
          border-radius: 5px;
          object-fit: cover;
        }
        .upload__btn {
          width: 20%;
          max-width: 80px;
          min-width: 60px;
          height: 30px;
          margin-top: 10px;
          border: none;
          border-radius: 5px;
          color: white;
          background-color: #1877f2;
          font-weight: 600;
          /* cursor: pointer; */
        }
        .upload__btn:hover {
          background-color: #0d6ce8;
        }
      }
    }
    .profile__header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: auto;
      border-bottom: 1px solid lightgrey;
      background-color: white;

      .profile__top {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        max-width: 940px;
        .cover__img {
          width: 100%;
          max-height: 348px;
          border-radius: 10px;
          object-fit: cover;
        }
        .avatar__container {
          position: absolute;
          bottom: -24px;
          z-index: 1;
          .avatar__wrapper {
            position: relative;
            .user__img {
              max-width: 168px;
              height: 168px;
              border: 4px solid white;
              border-radius: 50%;
              object-fit: cover;
            }
            .btn__add-profile {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              right: 20px;
              bottom: 10px;
              width: 36px;
              height: 36px;
              border: none;
              border-radius: 50%;
              background-color: #e4e6eb;
              cursor: pointer;
            }
            .btn__add-profile:hover {
              background-color: #c9ccd2;
            }
          }
        }
        .btn__add-cover {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: 60px;
          bottom: 20px;
          height: 40px;
          padding: 0 10px;
          border: none;
          border-radius: 10px;
          background-color: #e4e6eb;
          cursor: pointer;
          .camera__icon {
            font-size: 20px;
          }
          .btn__add-photo-text {
            padding-top: 2px;
            margin-left: 4px;
            font-size: 14px;
            font-weight: bold;
          }
        }
        .btn__add-cover:hover {
          background-color: #c9ccd2;
        }
      }
      .profile__name {
        width: 100%;
        max-width: 900px;
        margin-top: 40px;
        font-size: 24px;
        text-align: center;
        .name__hr {
          width: 100%;
          margin-top: 10px;
        }
      }
      .menu__container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        max-width: 900px;
        margin: 10px 0;
        .menu__links {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0;
          padding: 0;
          list-style: none;
          .menu__item {
            min-width: 80px;
            text-align: center;
            .item__btn {
              height: 40px;
              padding: 4px;
              border: none;
              border-radius: 5px;
              background-color: white;
            }
            .item__btn:hover {
              background-color: #e4e6eb;
            }
          }
        }
        .menu__buttons {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0;
          padding: 0;
          list-style: none;
          .buttons__item {
            display: flex;
            align-items: center;
            margin-right: 10px;
            .buttons__btn {
              display: flex;
              align-items: center;
              justify-content: space-evenly;
              min-width: 40px;
              height: 36px;
              padding: 5px 20px;
              border: none;
              border-radius: 5px;
              font-weight: bold;
            }
            .add {
              color: white;
              background-color: #1877f2;
            }
            .buttons__icon {
              margin-right: 10px;
              font-size: 18px;
            }
          }
          .buttons__item:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .profile__main {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      max-width: 900px;
      margin-top: 20px;

      .left {
        width: 45vw;
        margin-right: 20px;
      }
      .right {
        width: 45vw;

        .main__photos {
          height: auto;
          border-radius: 10px;
          padding: 10px;
          -webkit-box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
            inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          background-color: white;

          .photos__top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 10px;
            .photos__link {
              text-decoration: none;
            }
          }
          .grid__container {
            border-radius: 10px;
            overflow: hidden;

            .photos__grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
              grid-template-rows: repeat(3, 1fr);
              gap: 10px;

              .grid__tile {
                .photos__friends {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
            }
          }
        }
        .main__friends {
          padding: 20px 10px 30px 10px;
          margin: 20px 0;
          border-radius: 10px;
          -webkit-box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
            inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          background-color: white;
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
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            grid-template-rows: repeat(3, 1fr);
            column-gap: 10px;
            row-gap: 25px;
            margin-top: 20px;
            .contacts__tile {
              .contacts__picture {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
    @media (max-width: 700px) {
      .menu__item {
        min-width: 36px;
      }
      .profile__main {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .left {
          margin: 0;
        }
      }
    }
  }
`;
