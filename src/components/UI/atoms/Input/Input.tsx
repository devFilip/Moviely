import "./Input.css";

interface Input {
  placeholder: string;
  value: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Input> = ({ onChange, ...rest }) => {
  return <input className="input" {...rest} onChange={(e) => onChange(e)} />;
};

export default Input;
