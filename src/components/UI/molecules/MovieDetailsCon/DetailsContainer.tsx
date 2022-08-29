import React, { CSSProperties } from "react";
import { Movie, MovieLabel } from "../../../../models/MovieModel";
import { displayRating } from "../../../../utils/averageRating";
import Icon from "../../atoms/Icon/Icon";
import "./Details.css";

interface Details {
  movie: Movie;
}

const Details: React.FC<Details> = ({ movie }) => {
  const styles = {
    iconStyle: {
      marginBottom: "2rem",
      width: "2.5rem",
      height: "2.5rem",
    },
    labelStyle: {
      fontSize: "1.5rem",
      marginBottom: "2rem",
    },
  };
  const icons = [
    { path: "runtime", img: "/images/Vector.png" },
    { path: "country", img: "/images/flag.png" },
    { path: "genre", img: "/images/mask.png" },
    { path: "year", img: "/images/calendar.png" },
    { path: displayRating(movie), img: "/images/starIcon.png" },
  ];
  const renderIcon = (
    path: keyof MovieLabel,
    imgPath: string,
    styles: Styles
  ) => {
    return (
      <Icon
        label={typeof path === "string" ? movie[path] : path}
        iconSrc={imgPath}
        iconStyle={styles.iconStyle}
        labelStyle={styles.labelStyle}
      />
    );
  };
  return (
    <div className="details">
      <div className="details-icons">
        {icons.map((icon) =>
          renderIcon(icon.path as keyof MovieLabel, icon.img, styles)
        )}
      </div>
      <div className="details-description">{movie.description}</div>
    </div>
  );
};
interface Styles {
  iconStyle: CSSProperties;
  labelStyle: CSSProperties;
}

export default Details;
