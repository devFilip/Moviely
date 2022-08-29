import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../../models/MovieModel";
import { RootState } from "../../../redux/redux/toolkit/configureStore";
import { getMovie } from "../../../redux/redux/toolkit/moviesSlice";
import MovieDetails from "../../UI/organisms/MovieDetails/MovieDetails";
import MovieComments from "../../UI/organisms/MovieComments/MovieComments";

const DescriptionPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovie(id));
  }, []);
  const role = "admin";
  const movie = useSelector((state: RootState) => state.movies.movie);

  const jsx = (movie: Movie) => {
    return (
      <div className="view">
        <div className="view-wrap">
          <MovieDetails movie={movie} role={role} />
          <MovieComments />
        </div>
      </div>
    );
  };
  return jsx(movie as Movie);
};

export default DescriptionPage;
