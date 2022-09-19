import { CommentModel } from "../../../models/CommentModel";
import { InputModel } from "../../../models/InputModel";
import { Movie } from "../../../models/MovieModel";
import { RatingModel } from "../../../models/RatingsModel";
import MovieService from "../../../services/MovieService";

export const requestGetMovies = () => MovieService.getMovies();

export const requestGetFilteredMovies = (filterObj: InputModel) =>
  MovieService.getFilteredMovies(filterObj);

export const requestGetMovie = (movieId: string) =>
  MovieService.getMovie(movieId);

export const requestCommentMovie = (movie: Movie, comment: CommentModel) =>
  MovieService.commentMovie(comment, movie);

export const requestRateMovie = (movie: Movie, rating: RatingModel) =>
  MovieService.rateMovie(movie, rating);

export const requestPostMovie = (movie: Movie) => MovieService.postMovie(movie);

export const requestUpdateMovie = (movie: Movie) =>
  MovieService.updateMovie(movie);
