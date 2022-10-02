import { Movie } from "../models/MovieModel";

export const findMovie = (movies: Array<Movie>, movieId: string) => {
  return movies.filter((m) => m.id === movieId);
};
