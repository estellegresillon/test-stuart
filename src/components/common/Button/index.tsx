import StyledButton from "./styles";

export interface IButton {
  label: string;
  disabled: boolean;
}

const Button: React.FC<IButton> = ({ label, ...props }) => (
  <StyledButton {...props}>{label}</StyledButton>
);

export default Button;
