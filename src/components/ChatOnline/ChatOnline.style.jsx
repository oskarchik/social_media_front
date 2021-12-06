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
        border-radius: 50%;
        object-fit: cover;
        margin-right: 5px;
      }
      .chat-online__badge {
        width: 12px;
        height: 12px;
        background-color: #00c300;
        border-radius: 50%;
        border: 2px solid white;
        position: absolute;
        top: 0px;
        left: 28px;
      }
    }
    .chat-online__name {
    }
  }
`;
