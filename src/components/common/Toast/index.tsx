import StyledToast from "./styles";

export interface IToast {
  label: string;
  onClick: () => void;
}

const Toast: React.FC<IToast> = ({ label, onClick }) => {
  return <StyledToast onClick={onClick}>{label}</StyledToast>;
};

export default Toast;
