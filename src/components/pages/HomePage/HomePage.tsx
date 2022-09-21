import { useEffect, useState } from "react";
import { InputModel } from "../../../models/InputModel";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredMovies,
  getMovies,
} from "../../../redux/redux/toolkit/moviesSlice";
import { RootState } from "../../../redux/redux/toolkit/configureStore";

import FilterForm from "../../UI/organisms/FilterForm/FilterForm";
import List from "../../UI/molecules/MovieList/List";
import "./HomePage.css";
import Loader from "../Loader/Loader";

interface HomePage {
  role: string;
}

const HomePage: React.FC<HomePage> = ({ role }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  const handleFilter = (obj: InputModel) => {
    const filterObj: InputModel = {
      ...obj,
      grade: Number(obj.grade),
    };
    dispatch(getFilteredMovies(filterObj));
  };

  return (
    <div className="view">
      <FilterForm role={role} onFilter={handleFilter} />
      <List items={movies} />
    </div>
  );
};

export default HomePage;
