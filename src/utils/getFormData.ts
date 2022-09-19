import { Movie } from "../models/MovieModel";

export const getFormObj = (movie: Movie) => {
  if (Object.keys(movie).length !== 0)
    return {
      title: movie.title,
      genre: movie.genre,
      year: movie.year,
      runtime: movie.runtime,
      imageUrl: movie.imageUrl,
      country: movie.country,
      movieTrailer: movie.movieTrailer,
      description: movie.description,
    };
};
