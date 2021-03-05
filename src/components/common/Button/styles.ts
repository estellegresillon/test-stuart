import styled from "styled-components";
import { ITheme } from "model/ITheme";
import { IButton } from ".";

const bg = ({ theme }: ITheme) => theme.gradients.primary;
const opacity = (props: IButton) => (props.disabled ? "0.5" : "1");
const cursor = (props: IButton) => (props.disabled ? "initial" : "pointer");

const StyledButton = styled.div`
  color: white;
  font-weight: 900;
  border-radius: 8px;
  background: ${bg};
  height: 40px;
  text-align: center;
  line-height: 40px;
  opacity: ${opacity};
  cursor: ${cursor};
`;

export default StyledButton;
