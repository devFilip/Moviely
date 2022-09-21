import "./BlueTitle.css";
import { CSSProperties } from "react";

interface BlueTitle {
  title: string;
  style?: CSSProperties;
}

const BlueTitle: React.FC<BlueTitle> = ({ title, style }) => {
  return (
    <div className="blue-title" style={style}>
      {title}
    </div>
  );
};

export default BlueTitle;
