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
      console.log("Movie service", newMovies);

      return newMovies;
    }
    const { data } = await this.client?.get(url);

    return data;
  };

  getMovie = (id: string) => this.client?.get(`/movies/${id}`);
  commentMovie = (id: string, movie: Movie, comment: CommentModel) =>
    this.client?.post(`/movies/${id}`, {
      ...movie,
      comments: [...movie.comments, comment],
    });
  rateMovie = (id: string, rating: RatingModel) =>
    this.client?.post(`/movies/${id}/ratings`, rating);
}

export default new MovieService();
