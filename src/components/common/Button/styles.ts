import styled from "styled-components";
import { ITheme } from "model/ITheme";

const bg = ({ theme }: ITheme) => theme.gradients.primary;

const StyledButton = styled.div`
  color: white;
  font-weight: 900;
  border-radius: 8px;
  background: ${bg};
  height: 40px;
  text-align: center;
  line-height: 40px;
  opacity: 0.5;
`;

export default StyledButton;
