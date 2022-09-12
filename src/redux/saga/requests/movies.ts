import { CommentModel } from "../../../models/CommentModel";
import { InputModel } from "../../../models/InputModel";
import { Movie } from "../../../models/MovieModel";
import MovieService from "../../../services/MovieService";

export const requestGetMovies = () => MovieService.getMovies();
export const requestGetFilteredMovies = (filterObj: InputModel) =>
  MovieService.getFilteredMovies(filterObj);
export const requestGetMovie = (movieId: string) =>
  MovieService.getMovie(movieId);
export const requestCommentMovie = (
  movieId: string,
  movie: Movie,
  comment: CommentModel
) => MovieService.commentMovie(movieId, movie, comment);
