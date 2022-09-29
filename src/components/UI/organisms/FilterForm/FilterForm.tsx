import { useState } from "react";
import { InputModel } from "../../../../models/InputModel";
import Input from "../../atoms/Input/Input";
import Slider from "../../atoms/Slider/Slider";
import DropDownList from "../../atoms/DropDownList/DropDownList";
import RadioButton from "../../atoms/RadioButton/RadioButton";
import FilterSubmit from "../../atoms/FilterSubmit/FilterSubmit";
import "./FilterForm.css";

interface FilterForm {
  role: string;
  onFilter: (obj: InputModel) => void;
}

const FilterForm: React.FC<FilterForm> = ({ role, onFilter }) => {
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputCopy: any = { ...input };
    onFilter(inputCopy);
  };
  return (
    <form className="filter-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="filter-form__top">
        <div className="filter-form__width">
          <Input
            placeholder="Title"
            value={input.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="filter-form__width">
          <DropDownList name="genre" onChange={handleChange} />
        </div>
        <div className="filter-form__width">
          <Input
            placeholder="Year"
            value={input.year}
            name="year"
            onChange={handleChange}
          />
        </div>
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
