import { Movie } from "../../../models/MovieModel";
import MovieService from "../../../services/MovieService";

export const requestGetMovies = () => MovieService.getMovies();
