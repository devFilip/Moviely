import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../../models/MovieModel";
import { RootState } from "../../../redux/redux/toolkit/configureStore";
import { getMovie } from "../../../redux/redux/toolkit/moviesSlice";
import { displayRating } from "../../../utils/averageRating";
import Icon from "../../UI/atoms/Icon/Icon";
import ModifyMovie from "../../UI/molecules/MovieModify/ModifyMovie";
import "./DescriptionPage.css";
import Details from "../../UI/molecules/MovieDetailsCon/DetailsContainer";

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
      <div className="desc-page view">
        <div className="desc-page__wrapper view-wrap">
          <div className="desc-page__wrapper-top">
            <img
              className="wrapper-top__left"
              src={movie.imageUrl}
              alt="movie image"
            />
            <div className="wrapper-top__right">
              <ModifyMovie role={role} movie={movie} />
              <Details movie={movie} />
            </div>
          </div>
          <div className="desc-page__wrapper-bottom"></div>
        </div>
      </div>
    );
  };
  return jsx(movie as Movie);
};
const styles = {
  iconStlye: {
    marginBottom: "2rem",
    width: "2.5rem",
    height: "2.5rem",
  },
  labelStyle: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
  },
};

export default DescriptionPage;
