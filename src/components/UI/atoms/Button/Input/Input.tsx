import "./Input.css";

interface Input {
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Input> = ({ ...rest }) => {
  return <input className="input" {...rest} />;
};

export default Input;
