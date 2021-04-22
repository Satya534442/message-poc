import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;

  .parent {
    font-size: 18px;
    padding: 20px;
    border-bottom: 2px solid #7FFFD4;
    font-weight: 900;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance: textfield;
      border: 0;
      padding: 8px 12px;
      width: 50%;
      font-size: 16px;

      &:hover, :focus {
        border: 0;
        outline: none;
      }
    }
  }
`;

export const StyledNavBarWrapper = styled.div`
  padding: 20px 12px;
  border-radius: 4px;
  height: 100%;
  box-sizing: border-box;

  .messages-wrapper {
    box-sizing: border-box;
    overflow: scroll;
    height: 85%;
  }

  .messageArea {
    box-sizing: border-box;
    display: flex;
    align-items: center;

    img {
      height: 40px;
      width: 40px;
    }

    textarea {
      width: 100%;
      font-size: 16px;
      height: 60px;
      margin-right: 30px;
      border-radius: 8px;
      font-family: inherit;
    }
  }
`;

const colorsHexCode = [
  "#B6D0E2",
  "#CCCCFF",
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
];

export const StyledNavBarList = styled.div`
  padding: 20px 12px;
  width: fit-content;
  background: ${props => colorsHexCode[props.index]};
  border-radius: 8px;
  ${props => props.isRight && `
    text-align: right;
    width: fit-content;
    margin-left: auto;
  `}
  margin-bottom: 10px;

  .message {
    font-size: 16px;
  }
  .message-date {
    font-size: 8px;
    margin-top: 10px;
  }
`;