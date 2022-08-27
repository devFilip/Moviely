import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../../models/MovieModel";
import { RootState } from "../../../redux/redux/toolkit/configureStore";
import { getMovie } from "../../../redux/redux/toolkit/moviesSlice";
import { calcAverageRating } from "../../../utils/averageRating";
import Icon from "../../UI/atoms/Icon/Icon";
import "./DescriptionPage.css";

const DescriptionPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovie(id));
  }, []);
  const movie = useSelector((state: RootState) => state.movies.movie);
  //   const [movie] = getMovie(movies, id as string);

  const jsx = (movie: Movie) => {
    return (
      <div className="desc-page">
        <div className="desc-page__wrapper">
          <div className="desc-page__wrapper-top">
            <img
              className="wrapper-top__left"
              src={movie.imageUrl}
              alt="movie image"
            />
            <div className="wrapper-top__right">
              <div className="wrapper-top__right__head">
                <span className="head__title">{movie.title}</span>
                <div className="head__icons">
                  <Icon
                    iconSrc="/images/edit.png"
                    iconStyle={{ cursor: "pointer", marginRight: "1.5rem" }}
                  />
                  <Icon
                    iconSrc="/images/trash.png"
                    iconStyle={{ cursor: "pointer" }}
                  />
                </div>
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
                    iconStyle={styles.iconStlye}
                    labelStyle={styles.labelStyle}
                    label={displayRating(movie)}
                  />
                </div>
                <div className="wrapper-top__right__body__desc">
                  <p>{movie.description}</p>
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
const displayRating = (movie: Movie) => {
  return Object.keys(movie).length !== 0
    ? calcAverageRating(movie?.ratings)
    : 5;
};

export default DescriptionPage;
