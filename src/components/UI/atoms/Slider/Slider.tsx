import "./Slider.css";
const Slider = () => {
  return (
    <div className="slider">
      <input className="slider__input" type="range" name="" />
      <div className="slider__desc">
        <p>0</p>
        <p>Minimum grade</p>
        <p>5</p>
      </div>
    </div>
  );
};

export default Slider;
