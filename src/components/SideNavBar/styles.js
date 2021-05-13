import styled from 'styled-components';

export const StyledNavBarWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: scroll;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .scroll {
    overflow: scroll;
  }

  .head {
    position: relative;
    top: 0;
    display: flex;
    align-items: center;
    padding: 12px;
    font-weight: 900;
    font-size: 20px;

    .right {
      margin-right: 0;
      margin-left: auto;
      font-size: 16px;
    }

    img {
      width: 40px;
      height: 40px;
    }

    button {
      border: 0;
      background-color: inherit;
      cursor: pointer;
      margin-right: 0;
      margin-left: auto;
  
      img {
        width: 40px;
        height: 40px;
      }
  
      ${props => props.disabled && `
        opacity: 0.2;
        cursor: initial;
      `}
    }
  }
`;

const colorsHexCode = [
  "#B6D0E2",
  "#96DED1",
  "#9FE2BF",
  "#87CEEB",
  "#EADDCA",
  "#E5AA70",
  "#F0E68C",
  "#F5DEB3",
  "#B2BEB5",
  "#7393B3",
  "#D3D3D3",
  "#E5E4E2",
  "#7FFFD4",
  "#C1E1C1",
  "#9FE2BF",
  "#CCCCFF",
];

export const StyledNavBarList = styled.div`
  padding: 20px 12px;
  background: ${props => colorsHexCode[props.index]};
  margin-bottom: 5px;
  cursor: pointer;
  &.selected {
    border: 2px solid;
  }

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
    
    .child-1 {
      width: 15%;
    }

    .child-2 {
      width: 55%;
      margin-left: 5px;

      img {
        height: 20px;
        width: 20px;
        margin-top: 10px;
        margin-right: 0;
        margin-left: auto;
        display: flex;
      }
    }
    .child-3 {
      width: 30%;
      img {
        height: 20px;
        width: 20px;
        margin-top: 10px;
        margin-right: 0;
        margin-left: auto;
        display: flex;
      }
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
  position: absolute;
  bottom: 0;
  padding: 20px;
  background-color: white;
  width: 100%;

  button {
    border: 0;
    background-color: #ffffff;
    cursor: pointer;
    width: 25%;
    text-align: left;
    font-size: 14px;

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