import React from "react";
import { Movie } from "../../../../models/MovieModel";
import { displayRating } from "../../../../utils/averageRating";
import Details from "../../molecules/MovieDetailsCon/DetailsContainer";
import ModifyMovie from "../../molecules/MovieModify/ModifyMovie";
import "./MovieDetails.css";

interface MovieDetails {
  movie: Movie;
  role: string;
}

const MovieDetails: React.FC<MovieDetails> = ({ movie, role }) => {
  return (
    <div className="movie-details">
      <img
        className="movie-details__left"
        src={movie.imageUrl}
        alt="movie image"
      />
      <div className="movie-details__right">
        <ModifyMovie role={role} movie={movie} />
        <Details movie={movie} />
      </div>
    </div>
  );
};

export default MovieDetails;
