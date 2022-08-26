import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Movie } from "../../../models/MovieModel";
import { RootState } from "../../../redux/redux/toolkit/configureStore";
import { getMovie, getMovies } from "../../../redux/redux/toolkit/moviesSlice";
// import { getMovie } from "../../../utils/getMovie";
import "./DescriptionPage.css";

const DescriptionPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovie(id));
  }, []);
  const movie = useSelector((state: RootState) => state.movies.movie);
  console.log(movie as Movie);
  //   const [movie] = getMovie(movies, id as string);

  const jsx = (movie: Movie) => {
    return (
      <div className="desc-page">
        <div className="desc-page__wrapper">
          <div className="desc-page__wrapper__top">
            <img
              className="wrapper__left"
              src={movie.imageUrl}
              alt="movie image"
            />
            <div className="wrapper__right">
              <div className="wrapper__right__head"></div>
              <div className="wrapper__right__body"></div>
            </div>
          </div>
          <div className="desc-page__wrapper__bottom"></div>
        </div>
      </div>
    );
  };
  return jsx(movie as Movie);
};

export default DescriptionPage;
