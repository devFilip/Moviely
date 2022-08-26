import _ from "lodash";
import api from "../api/axios";
import { InputModel } from "../models/InputModel";
import { Movie } from "../models/MovieModel";
import { calcAverageRating } from "../utils/averageRating";

class MovieService {
  client;
  constructor() {
    this.client = api;
  }
  getMovies = () => {
    return this.client?.get("/movies");
  };
  getFilteredMovies = async (filterObj: InputModel) => {
    let url: string = "/movies?";
    if (filterObj.title !== "") url += `title_like=${filterObj.title}`;
    if (filterObj.year !== "") url += `&year=${filterObj.year}`;
    if (filterObj.genre !== "") url += `&genre=${filterObj.genre}`;
    if (filterObj.grade !== 0) {
      const { data } = await this.client?.get(url);
      const newMovies = data.filter((movie: Movie) => {
        return filterObj.grade === Math.round(calcAverageRating(movie.ratings));
      });
      console.log("Movie service", newMovies);

      return newMovies;
    }
    const { data } = await this.client?.get(url);
    return data;
  };
  getMovie = (id: string) => {
    return this.client?.get(`/movies/${id}`);
  };
}

export default new MovieService();
