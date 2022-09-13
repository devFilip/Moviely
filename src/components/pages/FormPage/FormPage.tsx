import Input from "../../UI/atoms/Input/Input";
import { useState } from "react";
import "./FormPage.css";
import DropDownList from "../../UI/atoms/DropDownList/DropDownList";

interface formInput {
  title: string;
  genre: string;
  year: string;
  runtime: string;
  imageUrl: string;
  country: string;
  trailerUrl: string;
  description: string;
}

const FormPage = () => {
  const [form, setForm] = useState({
    title: "",
    genre: "",
    year: "",
    runtime: "",
    imageUrl: "",
    country: "",
    trailerUrl: "",
    description: "",
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const formCopy: formInput = { ...form };
    formCopy[e.target.name as keyof formInput] = e.target.value;
    setForm(formCopy);
  };
  return (
    <div className="view">
      <div className="view-wrap form-wrap">
        <div className="form">
          <Input
            placeholder="Title"
            value={form.title}
            name="title"
            onChange={(e) => handleChange(e)}
          />
          <Input
            placeholder="Year"
            value={form.year}
            name="year"
            onChange={(e) => handleChange(e)}
          />
          <Input
            placeholder="Image Url"
            value={form.imageUrl}
            name="imageUrl"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form">
          <DropDownList name="genre" onChange={(e) => handleChange(e)} />
          <Input
            placeholder="Runtime"
            value={form.runtime}
            name="runtime"
            onChange={(e) => handleChange(e)}
          />
          <Input
            placeholder="Country"
            value={form.country}
            name="country"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default FormPage;
