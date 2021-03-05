import StyledButton from "./styles";

export interface IButton {
  label: string;
  disabled: boolean;
}

const Button: React.FC<IButton> = ({ label, disabled }) => (
  <StyledButton disabled={disabled}>{label}</StyledButton>
);

export default Button;
