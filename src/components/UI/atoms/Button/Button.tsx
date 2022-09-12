import "./Button.css";

interface Button {
  text: string;
  color: string;
  size: string;
  textColor: string;
  padding?: string;
  fontSize?: string;
}

const Button: React.FC<Button> = ({
  text,
  color,
  size,
  padding,
  fontSize,
  textColor,
}) => {
  return (
    <button
      className="button"
      style={{
        color: textColor,
        background: color,
        fontSize,
        width: size,
        padding: padding ? padding : "0.2rem",
        height: "100%",
      }}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
