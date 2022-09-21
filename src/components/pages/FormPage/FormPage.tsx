import Input from "../../UI/atoms/Input/Input";
import React, { useState, useEffect } from "react";
import "./FormPage.css";
import DropDownList from "../../UI/atoms/DropDownList/DropDownList";
import TextField from "../../UI/atoms/TextField/TextField";
import BlueTitle from "../../UI/atoms/BlueTitle/BlueTitle";
import Button from "../../UI/atoms/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovie,
  postMovie,
  updateMovie,
} from "../../../redux/redux/toolkit/moviesSlice";
import { RootState } from "../../../redux/redux/toolkit/configureStore";
import { Movie } from "../../../models/MovieModel";
import { getFormObj } from "../../../utils/getFormData";
import { v4 } from "uuid";
const Joi = require("joi-browser");

interface formInput {
  title: string;
  genre: string;
  year: string | number;
  runtime: string | number;
  imageUrl: string;
  country: string;
  movieTrailer: string;
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
    movieTrailer: "",
    description: "",
  });
  const [formErrors, setFormErrors] = useState<any>({});
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = useSelector((state: RootState) => state.movies.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id !== "new") {
      dispatch(getMovie(id));
      const formObj = getFormObj(movie as Movie);
      setForm(formObj as any);
    }
  }, []);
  const schema: any = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    year: Joi.number().required().label("Year"),
    imageUrl: Joi.string().required().label("Image"),
  };
  const validate = () => {
    const validationFields = {
      title: form.title,
      genre: form.genre,
      year: form.year,
      imageUrl: form.imageUrl,
    };
    console.log(validationFields);

    const config = {
      abortEarly: false,
    };
    const result = Joi.validate(validationFields, schema, config);

    if (result.erorr === null) return null;
    else {
      const errors: any = {};

      if (result.error) {
        for (let item of result.error.details)
          errors[item.path[0]] = item.message;
      }

      return errors;
    }
  };
  const validateProperty = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const obj = { [e.target.name]: e.target.value };
    const schemaField = { [e.target.name]: schema[e.target.name] };
    const result = Joi.validate(obj, schemaField);
    return result.error ? result.error.details[0].message : null;
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const errors = { ...formErrors };
    const errorMessage = validateProperty(e);

    if (errorMessage) errors[e.target.name] = errorMessage;
    else delete errors[e.target.name];

    const formCopy: formInput = { ...form };
    formCopy[e.target.name as keyof formInput] = e.target.value;
    setForm(formCopy as formInput);
    setFormErrors(errors);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorsObj = validate();
    if (Object.keys(errorsObj).length !== 0) {
      setFormErrors(errorsObj);
      return;
    }

    if (id === "new") {
      const movie: any = {
        ...form,
        id: v4(),
        comments: [],
        ratings: [],
      };
      dispatch(postMovie(movie));
      setTimeout(() => navigate("/"), 300);
    } else {
      const movieCopy: any = {
        ...movie,
        title: form.title,
        genre: form.genre,
        year: form.year,
        runtime: form.runtime,
        imageUrl: form.imageUrl,
        country: form.country,
        movieTrailer: form.movieTrailer,
        description: form.description,
      };
      console.log(movieCopy);

      dispatch(updateMovie(movieCopy));
      setTimeout(() => navigate("/"), 0);
    }
  };
  return (
    <div className="view">
      <form className="view-wrap form-wrap" onSubmit={(e) => handleSubmit(e)}>
        <div className="--special">
          <BlueTitle title={id === "new" ? "New Movie" : "Edit Movie"} />
        </div>
        <div className="form">
          <Input
            placeholder="Title"
            value={form.title}
            name="title"
            error={formErrors.title}
            onChange={(e) => handleChange(e)}
          />
          <DropDownList
            value={form.genre}
            name="genre"
            error={formErrors.genre}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form">
          <Input
            placeholder="Year"
            value={form.year}
            name="year"
            error={formErrors.year}
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
            error={formErrors.imageUrl}
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
            value={form.movieTrailer}
            name="movieTrailer"
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
