import "./DropDownList.css";

interface DropDownList {
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDownList: React.FC<DropDownList> = ({ name, value, onChange }) => {
  return (
    <div className="drop-list">
      <select
        className="drop-list__select"
        name={name}
        onChange={(e) => onChange(e)}
      >
        <option value={value ? value : ""}>{value ? value : "Genre"}</option>
        <option value="ACTION">Action</option>
        <option value="COMEDY">Comedy</option>
        <option value="ROMANCE">Romance</option>
        <option value="HORROR">Horror</option>
        <option value="CRIME">Crime</option>
        <option value="DRAMA">Drama</option>
      </select>
      <img src="/images/arrowDown.png" alt="arrow pointing down" />
    </div>
  );
};

export default DropDownList;
