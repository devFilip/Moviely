import { takeLatest } from "redux-saga/effects";
import { addComment, getComments } from "../redux/toolkit/commentsSlice";
import {
  deleteMovie,
  getFilteredMovies,
  getMovie,
  getMovies,
  postMovie,
  setMovieComment,
  setMovieRating,
  updateMovie,
} from "../redux/toolkit/moviesSlice";
import { addRating } from "../redux/toolkit/ratingsSlice";
import { getUser, getUsers } from "../redux/toolkit/userSlice";
import { handleAddComment, handleGetComments } from "./handlers/comments";
import {
  handleCommentMovie,
  handleDeleteMovie,
  handleGetFilteredMovies,
  handleGetMovie,
  handleGetMovies,
  handlePostMovie,
  handleRateMovie,
  handleUpdateMovie,
} from "./handlers/movies";
import { handleAddRating } from "./handlers/ratings";
import { handleGetUser, handleGetUsers } from "./handlers/users";

export function* watcherSaga() {
  yield takeLatest(getMovies.type, handleGetMovies);
  yield takeLatest(getFilteredMovies.type, handleGetFilteredMovies);
  yield takeLatest(getMovie.type, handleGetMovie);
  yield takeLatest(getUsers.type, handleGetUsers);
  yield takeLatest(getUser.type, handleGetUser);
  yield takeLatest(setMovieComment.type, handleCommentMovie);
  yield takeLatest(setMovieRating.type, handleRateMovie);
  yield takeLatest(addComment.type, handleAddComment);
  yield takeLatest(addRating.type, handleAddRating);
  yield takeLatest(postMovie.type, handlePostMovie);
  yield takeLatest(updateMovie.type, handleUpdateMovie);
  yield takeLatest(deleteMovie.type, handleDeleteMovie);
  yield takeLatest(getComments.type, handleGetComments);
}
