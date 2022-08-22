import { useEffect, useState } from "react";
import { InputModel } from "../../../models/InputModel";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../redux/redux/toolkit/moviesSlice";
import List from "../../UI/molecules/MovieList/List";
import FilterForm from "../../UI/organisms/FilterForm/FilterForm";
import "./HomePage.css";
import { RootState } from "../../../redux/redux/toolkit/configureStore";

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
    const filterObj: InputModel = { ...obj };
    // if (filterObj.title !== "")
    //   console.log(
    //     movies.filter((movie) =>
    //       movie.title.toLowerCase().includes(filterObj.title.toLowerCase())
    //     )
    //   );
    console.log(obj);
  };

  return (
    <div className="home__page">
      <FilterForm role={role} onFilter={handleFilter} />
      <List items={movies} />
    </div>
  );
};

export default HomePage;
