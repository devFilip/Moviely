import api from "../api/axios";

class MovieService {
  client;
  constructor() {
    this.client = api;
  }
  async getMovies() {
    return this.client?.get("/movies");
  }
  async getMovie(id: string) {
    return this.client?.get(`/movies/${id}`);
  }
}

export default new MovieService();
