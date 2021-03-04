import styled from "styled-components";
import { ITheme } from "model/ITheme";

const grey = ({ theme }: ITheme) => theme.colors.grey;
const darkGrey = ({ theme }: ITheme) => theme.colors.darkGrey;

const StyledInput = styled.div`
  width: 100%;

  input {
    border-radius: 4px;
    background-color: ${grey};
    height: 32px;
    border: none;
    color: ${darkGrey};
    padding-left: 12px;
    margin-left: 8px;
    width: calc(100% - 22px);
  }
`;

export default StyledInput;
