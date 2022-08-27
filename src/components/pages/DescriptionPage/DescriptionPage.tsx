import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../../models/MovieModel";
import { RootState } from "../../../redux/redux/toolkit/configureStore";
import { getMovie } from "../../../redux/redux/toolkit/moviesSlice";
import { displayRating } from "../../../utils/averageRating";
import Icon from "../../UI/atoms/Icon/Icon";
import "./DescriptionPage.css";
import ModifyMovie from "../../UI/molecules/MovieModify/ModifyMovie";

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
              <div className="wrapper-top__right__head">
                <span className="head__title">{movie.title}</span>
                <ModifyMovie role={role} rate={displayRating(movie)} />
              </div>
              <div className="wrapper-top__right__body">
                <div className="wrapper-top__right__body__icons">
                  <Icon
                    iconSrc="/images/Vector.png"
                    label={movie?.runtime}
                    iconStyle={styles.iconStlye}
                    labelStyle={styles.labelStyle}
                  />
                  <Icon
                    iconSrc="/images/flag.png"
                    label={movie?.country}
                    iconStyle={styles.iconStlye}
                    labelStyle={styles.labelStyle}
                  />
                  <Icon
                    iconSrc="/images/mask.png"
                    label={movie?.genre}
                    iconStyle={styles.iconStlye}
                    labelStyle={styles.labelStyle}
                  />
                  <Icon
                    iconSrc="/images/calendar.png"
                    label={movie?.year}
                    iconStyle={styles.iconStlye}
                    labelStyle={styles.labelStyle}
                  />
                  <Icon
                    iconSrc="/images/starIcon.png"
                    label={displayRating(movie)}
                    iconStyle={styles.iconStlye}
                    labelStyle={styles.labelStyle}
                  />
                </div>
                <div className="wrapper-top__right__body__desc">
                  <p className="wrapper-top__right__body__desc__p">
                    {movie.description}
                  </p>
                </div>
              </div>
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
