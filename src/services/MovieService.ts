import api from "../api/axios";
import { InputModel } from "../models/InputModel";

class MovieService {
  client;
  constructor() {
    this.client = api;
  }
  async getMovies() {
    return this.client?.get("/movies");
  }
  async getFilteredMovies(filterObj: InputModel) {
    let url: string = "/movies?";
    if (filterObj.title !== "") url += `title_like=${filterObj.title}`;
    if (filterObj.year !== "" && filterObj.year !== 0)
      url += `&year=${filterObj.year}`;
    if (filterObj.genre !== "") url += `&genre=${filterObj.genre}`;

    console.log("URLLL", url);

    return this.client?.get(url);
  }
  async getMovie(id: string) {
    return this.client?.get(`/movies/${id}`);
  }
}

export default new MovieService();
