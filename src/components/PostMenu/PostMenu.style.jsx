import styled from 'styled-components';

export const StyledPostMenu = styled.div`
  .menu__close {
    display: flex;
    align-items: center;
    background-color: #e4e6eb;
    border: none;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    .icon {
      color: #606770;
    }
  }
  .menu__delete {
    display: flex;
    align-items: end;
    margin: 15px 0 5px 0;
    padding: 5px;
    cursor: pointer;

    .icon {
      margin-right: 5px;
    }
  }
  .menu__edit {
    display: flex;
    align-items: end;
    padding: 5px;
    cursor: pointer;
    .icon {
      margin-right: 5px;
    }
  }
`;
