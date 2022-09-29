import "./Button.css";
import { CSSProperties } from "react";

interface Button {
  text: string;
  style: CSSProperties;
  onClick?: () => void;
}

const Button: React.FC<Button> = ({ text, style, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <button className="button" style={style} onClick={handleClick}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
