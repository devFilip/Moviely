import "./Button.css";

interface Button {
  text: string;
  color: string;
  size: string;
  textColor: string;
}

const Button: React.FC<Button> = ({ text, color, size, textColor }) => {
  return (
    <div
      className="button"
      style={{ color: textColor, background: color, width: size }}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
