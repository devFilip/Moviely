import { takeLatest } from "redux-saga/effects";
import { getMovies } from "../redux/toolkit/moviesSlice";
import { handleGetMovies } from "./handlers/movies";
import { requestGetMovies } from "./requests/movies";

export function* watcherSaga() {
  yield takeLatest(getMovies.type, handleGetMovies);
}
