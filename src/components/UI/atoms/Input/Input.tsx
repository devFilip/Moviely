import "./Input.css";

interface Input {
  placeholder: string;
  value: string | number;
  name: string;
  error?: string;
  icon?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Input> = ({ error, onChange, icon, ...rest }) => {
  return (
    <div className="input">
      {icon && (
        <img
          style={{ margin: "0 1rem", opacity: "0.5" }}
          className="icon__img"
          src={icon}
          alt=""
        />
      )}
      <input className="input__input" {...rest} onChange={(e) => onChange(e)} />
      {error ? <span className="input__error">{error}</span> : ""}
    </div>
  );
};

export default Input;
