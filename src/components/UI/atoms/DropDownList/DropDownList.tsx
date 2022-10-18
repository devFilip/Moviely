import _ from "lodash";
import "./DropDownList.css";

interface DropDownList {
  name: string;
  value?: string;
  error?: string;
  icon?: string;
  options: Array<{ value: string; label: string }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDownList: React.FC<DropDownList> = ({
  name,
  value,
  error,
  icon,
  options,
  onChange,
}) => {
  return (
    <div>
      <div className="drop-list">
        {icon && (
          <img
            style={{ margin: "0 1rem" }}
            className="icon__img"
            src={icon}
            alt=""
          />
        )}
        <select
          className="drop-list__select"
          name={name}
          onChange={(e) => onChange(e)}
        >
          <option value={value ? value : ""}>
            {value ? value : _.capitalize(name)}
          </option>
          {options.map((opt) => (
            <option value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <img src="/images/arrowDown.png" alt="arrow pointing down" />
      </div>
      {error ? <span className="drop-list__error">{error}</span> : ""}
    </div>
  );
};

export default DropDownList;
