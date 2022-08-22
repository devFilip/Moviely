import "./RadioButton.css";

interface RadioButton {
  name: string;
  role: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButton> = ({ role, name, onChange }) => {
  const isHidden = role === "admin";

  return (
    <div className="radio">
      <input
        type="radio"
        name={name}
        id="radio"
        value="watched"
        onChange={(e) => onChange(e)}
        hidden={isHidden}
        style={{
          marginRight: "1rem",
          width: "2rem",
          height: "2rem",
          cursor: "pointer",
        }}
      />
      <label htmlFor="radio" className="radio__label" hidden={isHidden}>
        In my watched list
      </label>
    </div>
  );
};

export default RadioButton;
