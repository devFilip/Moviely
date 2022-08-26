import { Movie } from "../models/MovieModel";

export const getMovie = (movies: Array<Movie>, movieId: string) =>
  movies.filter((m: Movie) => m.id === movieId);
