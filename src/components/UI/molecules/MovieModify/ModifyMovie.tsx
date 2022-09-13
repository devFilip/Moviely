import { Movie } from "../../../../models/MovieModel";
import { displayRating } from "../../../../utils/averageRating";
import Icon from "../../atoms/Icon/Icon";
import Rating from "../MovieRating/Rating";
import "./ModifyMovie.css";

interface ModifyMovie {
  role: string;
  movie: Movie;
}

const ModifyMovie: React.FC<ModifyMovie> = ({ role, movie }) => {
  const rate = displayRating(movie);
  return (
    <div className="modify-movie">
      <span className="modify-movie__title">{movie.title}</span>
      {role === "admin" ? (
        <div style={{ display: "flex" }}>
          <Icon
            iconSrc="/images/edit.png"
            iconStyle={{ cursor: "pointer", marginRight: "1.5rem" }}
          />
          <Icon iconSrc="/images/trash.png" iconStyle={{ cursor: "pointer" }} />
        </div>
      ) : (
        <Rating rating={rate} movie={movie} />
      )}
    </div>
  );
};

export default ModifyMovie;
