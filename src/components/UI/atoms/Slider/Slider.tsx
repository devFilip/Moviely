import "./Slider.css";

interface Slider {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider: React.FC<Slider> = ({ value, onChange, ...rest }) => {
  return (
    <div className="slider">
      <input
        className="slider__input"
        type="range"
        min={0}
        max={5}
        {...rest}
        onChange={(e) => onChange(e)}
      />
      <div className="slider__desc">
        <p>0</p>
        {value ? value : <p>Minimum grade</p>}
        <p>5</p>
      </div>
    </div>
  );
};

export default Slider;
