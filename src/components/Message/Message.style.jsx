import styled from 'styled-components';

export const StyledMessage = styled.div`
  .message__top {
    display: flex;

    margin-top: 20px;
    .message__image {
      width: 32px;
      height: 32px;
      margin: 0 10px;
      border-radius: 50%;
      object-fit: cover;
    }
    .message__text {
      max-width: 300px;
      padding: 10px;
      margin-left: 10px;
      background-color: #e4e6eb;
      color: black;
      border-radius: 20px;
    }
  }
  .message__bottom {
    font-size: 12px;
    margin-top: 10px;
  }
`;
