import { Movie } from "./MovieModel";

export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
  sex: string;
  approved: boolean;
  watchedMovies: Array<Movie> | undefined;
}
