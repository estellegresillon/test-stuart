import StyledButton from "./styles";

export interface IButton {
  label: string;
  disabled: boolean;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({ label, disabled, onClick }) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {label}
  </StyledButton>
);

export default Button;
