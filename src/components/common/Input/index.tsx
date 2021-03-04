import StyledInput from "./styles";

export interface IInput {
  placeholder: string;
  value: string;
}

const Input: React.FC<IInput> = ({ value, placeholder }) => (
  <StyledInput>
    <input value={value} placeholder={placeholder} />
  </StyledInput>
);

export default Input;
