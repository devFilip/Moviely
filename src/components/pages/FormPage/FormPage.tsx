import Input from "../../UI/atoms/Input/Input";
import { useState, useEffect } from "react";
import "./FormPage.css";
import DropDownList from "../../UI/atoms/DropDownList/DropDownList";
import TextField from "../../UI/atoms/TextField/TextField";
import BlueTitle from "../../UI/atoms/BlueTitle/BlueTitle";
import Button from "../../UI/atoms/Button/Button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../../redux/redux/toolkit/moviesSlice";
import { RootState } from "../../../redux/redux/toolkit/configureStore";
import { Movie } from "../../../models/MovieModel";
import { getFormObj } from "../../../utils/getFormData";

interface formInput {
  title: string;
  genre: string;
  year: string | number;
  runtime: string | number;
  imageUrl: string;
  country: string;
  trailerUrl: string;
  description: string;
}

const FormPage = () => {
  const [form, setForm] = useState<formInput>({
    title: "",
    genre: "",
    year: "",
    runtime: "",
    imageUrl: "",
    country: "",
    trailerUrl: "",
    description: "",
  });
  const { id } = useParams();
  const movie = useSelector((state: RootState) => state.movies.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id !== "new") {
      dispatch(getMovie(id));
      const formObj = getFormObj(movie as Movie);
      setForm(formObj as any);
    }
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const formCopy: formInput = { ...form };
    formCopy[e.target.name as keyof formInput] = e.target.value;
    setForm(formCopy as formInput);
  };
  return (
    <div className="view">
      <form className="view-wrap form-wrap">
        <div className="--special">
          <BlueTitle title={id === "new" ? "New Movie" : "Edit Movie"} />
        </div>
        <div className="form">
          <Input
            placeholder="Title"
            value={form.title}
            name="title"
            onChange={(e) => handleChange(e)}
          />
          <DropDownList
            value={form.genre}
            name="genre"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form">
          <Input
            placeholder="Year"
            value={form.year}
            name="year"
            onChange={(e) => handleChange(e)}
          />
          <Input
            placeholder="Runtime"
            value={form.runtime}
            name="runtime"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form">
          <Input
            placeholder="Image Url"
            value={form.imageUrl}
            name="imageUrl"
            onChange={(e) => handleChange(e)}
          />
          <Input
            placeholder="Country"
            value={form.country}
            name="country"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="--special">
          <Input
            placeholder="Trailer Url"
            value={form.trailerUrl}
            name="trailerUrl"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="--special">
          <TextField
            borderColor="#2596BE"
            placeholder="Description"
            name="description"
            value={form.description}
            background="white"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Button
          fontSize="2rem"
          text="Submit"
          textColor="white"
          size="30%"
          color="#2596BE"
          padding="1rem"
        />
      </form>
    </div>
  );
};

export default FormPage;
