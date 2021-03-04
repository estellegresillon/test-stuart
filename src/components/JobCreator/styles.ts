import styled from "styled-components";
import { ITheme } from "model/ITheme";

const shadow = ({ theme }: ITheme) => theme.shadows.normal;

const StyledJobCreator = styled.div`
  position: absolute;
  z-index: 1;
  border-radius: 8px;
  top: 0;
  left: 0;
  margin: 32px;
  background-color: white;
  padding: 16px;
  box-shadow: ${shadow};
  width: 300px;

  .Job-Creator-Input {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    width: 100%;
  }
`;

export default StyledJobCreator;
