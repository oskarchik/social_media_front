import styled from 'styled-components';

export const StyledChatOnline = styled.div`
  .chat-online__friend {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-weight: 500;
    cursor: pointer;
    .image__container {
      position: relative;
      .chat-online__image {
        width: 40px;
        height: 40px;
        margin-right: 5px;
        border-radius: 50%;
        object-fit: cover;
      }
      .chat-online__badge {
        position: absolute;
        top: 0px;
        left: 28px;
        width: 12px;
        height: 12px;
        border: 2px solid white;
        border-radius: 50%;
        background-color: #00c300;
      }
    }
    .chat-online__name {
    }
  }
`;
