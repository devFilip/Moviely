import { Link } from "react-router-dom";
import { Movie } from "../../../../models/MovieModel";
import { displayRating } from "../../../../utils/averageRating";
import Icon from "../../atoms/Icon/Icon";
import Rating from "../MovieRating/Rating";
import "./ModifyMovie.css";

interface ModifyMovie {
  role: string;
  movie: Movie;
  onModal: () => void;
}

const ModifyMovie: React.FC<ModifyMovie> = ({ role, movie, onModal }) => {
  const rate = displayRating(movie);
  return (
    <div className="modify-movie">
      <span className="modify-movie__title">{movie.title}</span>
      {role === "admin" ? (
        <div style={styles.div}>
          <Link to={`/movieForm/${movie.id}`}>
            <Icon iconSrc="/images/edit.png" iconStyle={styles.icon} />
          </Link>
          <div onClick={() => onModal()}>
            <Icon iconSrc="/images/trash.png" />
          </div>
        </div>
      ) : (
        <Rating rating={rate} movie={movie} />
      )}
    </div>
  );
};
const styles = {
  div: { display: "flex" },
  icon: { marginRight: "1.5rem" },
};

export default ModifyMovie;
