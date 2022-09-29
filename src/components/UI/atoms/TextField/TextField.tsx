import "./TextField.css";
interface TextField {
  borderColor?: string;
  name?: string;
  placeholder: string;
  background?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextField: React.FC<TextField> = ({
  borderColor,
  background,
  onChange,
  value,
  ...rest
}) => {
  return (
    <textarea
      className="textField"
      {...rest}
      value={value}
      cols={30}
      rows={5}
      onChange={(e) => onChange(e)}
      style={{ borderColor, background }}
    ></textarea>
  );
};

export default TextField;
