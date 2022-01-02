import styled from 'styled-components';

export const StyledPostMenu = styled.div`
  .menu__close {
    display: flex;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    border-radius: 50%;
    background-color: #e4e6eb;
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
