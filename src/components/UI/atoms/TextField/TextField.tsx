import "./TextField.css";
interface TextField {
  borderColor?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextField: React.FC<TextField> = ({ name, borderColor, onChange }) => {
  return (
    <textarea
      className="textField"
      placeholder="Leave you comment"
      name={name}
      onChange={(e) => onChange(e)}
      cols={30}
      rows={5}
      style={{ borderColor }}
    ></textarea>
  );
};

export default TextField;
