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
import MovieAlertModal from "../../UI/molecules/MovieAlertModal/MovieAlertModal";
import Loader from "../Loader/Loader";
import { Movie } from "../../../models/MovieModel";

interface HomePage {
  role: string;
}

const HomePage: React.FC<HomePage> = ({ role }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  const handleFilter = (obj: InputModel) => {
    const filterObj: InputModel = {
      ...obj,
      grade: Number(obj.grade),
    };
    dispatch(getFilteredMovies(filterObj));
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="view">
      <FilterForm role={role} onFilter={handleFilter} />
      {movies.length > 0 ? (
        <List items={movies} modal={showModal} onModal={handleModal} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default HomePage;
