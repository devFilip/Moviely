import _ from "lodash";
import api from "../api/axios";
import { CommentModel } from "../models/CommentModel";
import { InputModel } from "../models/InputModel";
import { Movie } from "../models/MovieModel";
import { RatingModel } from "../models/RatingsModel";
import { displayRating } from "../utils/averageRating";

class MovieService {
  client = api;

  getMovies = () => this.client?.get("/movies");

  getFilteredMovies = async (filterObj: InputModel) => {
    let url: string = "/movies?";
    if (filterObj.title !== "") url += `title_like=${filterObj.title}`;
    if (filterObj.year !== "") url += `&year=${filterObj.year}`;
    if (filterObj.genre !== "") url += `&genre=${filterObj.genre}`;
    if (filterObj.grade !== 0) {
      const { data } = await this.client?.get(url);
      const newMovies = data.filter((movie: Movie) => {
        return filterObj.grade === Math.round(displayRating(movie));
      });
      return newMovies;
    }
    const { data } = await this.client?.get(url);

    return data;
  };

  getMovie = (id: string) => this.client?.get(`/movies/${id}`);

  commentMovie = (comment: CommentModel, movie: Movie) =>
    this.client?.put(`/movies/${movie.id}`, {
      ...movie,
      comments: [...movie.comments, comment],
    });

  rateMovie = (movie: Movie, rating: RatingModel) =>
    this.client?.put(`/movies/${movie.id}`, {
      ...movie,
      ratings: [...movie.ratings, rating],
    });
}

export default new MovieService();
