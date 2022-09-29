import { Movie } from "../../../../models/MovieModel";
import "./Icon.css";

interface Icon {
  iconSrc: string;
  label?: string | number | keyof Movie;
  iconStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}

const Icon: React.FC<Icon> = ({ iconSrc, label, iconStyle, labelStyle }) => {
  return (
    <div className="icon">
      <img
        className="icon__img icon--margin__right"
        style={{ ...iconStyle, cursor: "pointer" }}
        src={iconSrc}
        alt="icon"
      />
      <label className="icon__label" style={labelStyle}>
        {label}
      </label>
    </div>
  );
};

export default Icon;
