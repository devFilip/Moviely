import { useState } from "react";
import DropDownList from "../../atoms/DropDownList/DropDownList";
import Input from "../../atoms/Input/Input";
import Slider from "../../atoms/Slider/Slider";
import "./FilterForm.css";

const FilterForm = () => {
  const [input, setInput] = useState({
    title: "",
    genre: "",
    year: "",
    grade: "",
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const inputCopy: any = { ...input };
    inputCopy[e.target.name] = e.target.value;
    setInput(inputCopy);
  };
  return (
    <div className="filter-form">
      <div className="filter-form__top">
        <Input
          placeholder="Title"
          value={input.title}
          name="title"
          onChange={handleChange}
        />
        <DropDownList name="genre" onChange={handleChange} />
        <Input
          placeholder="Year"
          value={input.year}
          name="year"
          onChange={handleChange}
        />
      </div>
      <div className="filter-form__bot">
        <Slider />
      </div>
    </div>
  );
};

export default FilterForm;
