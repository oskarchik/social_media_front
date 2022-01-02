import styled from 'styled-components';

export const StyledSpinner = styled.div`
  .loading-spinner {
    width: 36px;
    height: 36px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #09f;
    border-radius: 50%;
    cursor: none;
    animation: spinner 1s ease infinite;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
