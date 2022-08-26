import { takeLatest } from "redux-saga/effects";
import {
  getFilteredMovies,
  getMovie,
  getMovies,
} from "../redux/toolkit/moviesSlice";
import {
  handleGetFilteredMovies,
  handleGetMovie,
  handleGetMovies,
} from "./handlers/movies";

export function* watcherSaga() {
  yield takeLatest(getMovies.type, handleGetMovies);
  yield takeLatest(getFilteredMovies.type, handleGetFilteredMovies);
  yield takeLatest(getMovie.type, handleGetMovie);
}
