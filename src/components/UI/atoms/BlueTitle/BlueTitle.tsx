import "./BlueTitle.css";

interface BlueTitle {
  title: string;
  fontSize?: string;
}

const BlueTitle: React.FC<BlueTitle> = ({ title, fontSize }) => {
  return (
    <div className="blue-title" style={{ fontSize: fontSize }}>
      {title}
    </div>
  );
};

export default BlueTitle;
