import styled from 'styled-components';

export const StyledNavBarWrapper = styled.div`
  border-radius: 4px;
  overflow: scroll;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .scroll {
    overflow: scroll;
  }
`;

export const StyledNavBarList = styled.div`
  padding: 20px 12px;
  background: #c2c2c21a;
  margin-bottom: 5px;
  border-radius: 8px;
  cursor: pointer;

  ${props => props.isOpaqe && `
    opacity: 0.2;
    cursor: initial;
  `}

  .wrapper-contact {
    display: flex;

    img {
      height: 40px;
      width: 40px;
    }

    .child-2 {
      margin-left: 5px;
    }
  }

  .number {
    font-size: 16px;
  }

  .number-text {
    font-size: 10px;
    margin-top: 5px;
  }

  .number-date {
    font-size: 8px;
    margin-top: 8px;
  }
`;

export const StyledAddMessageWrapper = styled.div`
  margin-right: 0;
  margin-left: auto;

  button {
    border: 0;
    background-color: #ffffff;
    cursor: pointer;

    img {
      width: 40px;
      height: 40px;
    }

    ${props => props.disabled && `
      opacity: 0.2;
      cursor: initial;
    `}
  }
`;