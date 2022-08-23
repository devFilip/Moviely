import { takeLatest } from "redux-saga/effects";
import { getFilteredMovies, getMovies } from "../redux/toolkit/moviesSlice";
import { handleGetFilteredMovies, handleGetMovies } from "./handlers/movies";

export function* watcherSaga() {
  yield takeLatest(getMovies.type, handleGetMovies);
  yield takeLatest(getFilteredMovies.type, handleGetFilteredMovies);
}
