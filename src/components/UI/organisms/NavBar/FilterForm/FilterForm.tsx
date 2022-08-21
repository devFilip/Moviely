import { useState } from "react";
import Input from "../../../atoms/Button/Input/Input";
import DropDownList from "../../../atoms/DropDownList/DropDownList";
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
        {/* <Input placeholder="Title" />
        <Input placeholder="Genre" />
        <Input placeholder="Year" /> */}
      </div>
    </div>
  );
};

export default FilterForm;