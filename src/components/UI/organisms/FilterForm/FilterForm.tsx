import { useState } from "react";
import Input from "../../atoms/Input/Input";
import Slider from "../../atoms/Slider/Slider";
import DropDownList from "../../atoms/DropDownList/DropDownList";
import RadioButton from "../../atoms/RadioButton/RadioButton";
import FilterSubmit from "../../atoms/FilterSubmit/FilterSubmit";
import "./FilterForm.css";

interface FilterForm {
  role: string;
}

const FilterForm: React.FC<FilterForm> = ({ role }) => {
  const [input, setInput] = useState({
    title: "",
    genre: "",
    year: "",
    grade: "",
    watchedMovie: "",
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
    <form className="filter-form">
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
      <div className="filter-form__bottom">
        <Slider value={input.grade} name="grade" onChange={handleChange} />
        <RadioButton name="watchedMovie" onChange={handleChange} role={role} />
        <FilterSubmit />
      </div>
    </form>
  );
};

export default FilterForm;
