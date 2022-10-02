import "./Button.css";
import { CSSProperties } from "react";

interface Button {
  text: string;
  style: CSSProperties;
  onClick?: () => void;
  onAction?: (obj: any) => void;
}

const Button: React.FC<Button> = ({ text, style, onClick, onAction }) => {
  const handleClick = (obj: any) => {
    if (onClick) onClick();
    else if (onAction) onAction(obj);
  };
  return (
    <button className="button" style={style} onClick={handleClick}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
