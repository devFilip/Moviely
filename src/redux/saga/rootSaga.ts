import { takeLatest } from "redux-saga/effects";
import {
  getFilteredMovies,
  getMovie,
  getMovies,
  setMovieComment,
} from "../redux/toolkit/moviesSlice";
import { getUser, getUsers } from "../redux/toolkit/userSlice";
import {
  handleCommentMovie,
  handleGetFilteredMovies,
  handleGetMovie,
  handleGetMovies,
} from "./handlers/movies";
import { handleGetUser, handleGetUsers } from "./handlers/users";

export function* watcherSaga() {
  yield takeLatest(getMovies.type, handleGetMovies);
  yield takeLatest(getFilteredMovies.type, handleGetFilteredMovies);
  yield takeLatest(getMovie.type, handleGetMovie);
  yield takeLatest(getUsers.type, handleGetUsers);
  yield takeLatest(getUser.type, handleGetUser);
  yield takeLatest(setMovieComment.type, handleCommentMovie);
}
