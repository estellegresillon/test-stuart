import styled, { keyframes } from "styled-components";
import { ITheme } from "model/ITheme";

const black = ({ theme }: ITheme) => theme.colors.black;

const popUp = keyframes`
  from {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const StyledToast = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 32px;
  z-index: 1;
  line-height: 40px;
  padding: 0 16px;
  border-radius: 8px;
  background-color: ${black};
  height: 40px;
  color: white;
  animation: 5s ${popUp};
  animation-fill-mode: forwards;
  cursor: pointer;
`;

export default StyledToast;
