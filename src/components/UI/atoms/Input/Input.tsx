import "./Input.css";

interface Input {
  placeholder: string;
  value: string | number;
  name: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Input> = ({ error, onChange, ...rest }) => {
  return (
    <div style={{ width: "100%" }}>
      <input className="input" {...rest} onChange={(e) => onChange(e)} />
      {error ? <span className="input__error">{error}</span> : ""}
    </div>
  );
};

export default Input;
