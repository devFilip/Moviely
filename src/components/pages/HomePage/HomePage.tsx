import { useEffect, useState } from "react";
import { InputModel } from "../../../models/InputModel";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredMovies,
  getMovies,
} from "../../../redux/redux/toolkit/moviesSlice";
import List from "../../UI/molecules/MovieList/List";
import FilterForm from "../../UI/organisms/FilterForm/FilterForm";
import "./HomePage.css";
import { RootState } from "../../../redux/redux/toolkit/configureStore";
import _, { filter } from "lodash";
import { Movie } from "../../../models/MovieModel";

interface HomePage {
  role: string;
}

const HomePage: React.FC<HomePage> = ({ role }) => {
  const dispatch = useDispatch();

  const movies = useSelector((state: RootState) => state.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  const handleFilter = (obj: InputModel) => {
    let sum: number;
    const filterObj: InputModel = { ...obj, grade: Number(obj.grade) };

    dispatch(getFilteredMovies(filterObj));

    console.log(movies);

    console.log(filterObj);
  };

  return (
    <div className="home__page">
      <FilterForm role={role} onFilter={handleFilter} />
      <List items={movies} />
    </div>
  );
};

export default HomePage;
