import StyledButton from "./styles";

interface IButton {
  label: string;
}

const Button: React.FC<IButton> = ({ label }) => (
  <StyledButton>{label}</StyledButton>
);

export default Button;
