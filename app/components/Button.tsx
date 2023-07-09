import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button = ({label, onClick, disabled, outline, small, icon}:ButtonProps) => {
  return <button>{label}</button>;
};

export default Button;
