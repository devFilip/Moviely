import {
  requestCommentMovie,
  requestGetFilteredMovies,
  requestGetMovie,
  requestGetMovies,
  requestPostMovie,
  requestRateMovie,
  requestUpdateMovie,
} from "../requests/movies";
import {
  setFilteredMovies,
  setMovie,
  setMovieComment,
  setMovies,
} from "../../redux/toolkit/moviesSlice";
import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { Action } from "../../redux/toolkit/configureStore";

export function* handleGetMovies() {
  try {
    const response: AxiosResponse = yield call(requestGetMovies);
    yield put(setMovies([...response?.data]));
  } catch (error) {
    console.log(error);
  }
}
export function* handleGetFilteredMovies(action: Action) {
  const { payload } = action;
  try {
    const response: AxiosResponse = yield call(
      requestGetFilteredMovies,
      payload
    );
    yield put(setFilteredMovies(response));
  } catch (error) {
    console.log(error);
  }
}
export function* handleGetMovie(action: Action) {
  const { payload } = action;
  try {
    const response: AxiosResponse = yield call(requestGetMovie, payload);
    yield put(setMovie(response?.data));
  } catch (error) {
    console.log(error);
  }
}
export function* handleCommentMovie(action: Action) {
  const { comment, movie } = action.payload;
  console.log(movie, "MOVIE");
  console.log(comment, "COMMENT");

  try {
    const response: AxiosResponse = yield call(
      requestCommentMovie,
      movie,
      comment
    );
  } catch (error) {
    console.error(error);
  }
}
export function* handleRateMovie(action: Action) {
  const { movie, rating } = action.payload;
  try {
    yield call(requestRateMovie, movie, rating);
  } catch (error) {
    console.log(error);
  }
}
export function* handlePostMovie(action: Action) {
  const { payload } = action;

  try {
    yield call(requestPostMovie, payload);
  } catch (error) {
    console.log(error);
  }
}
export function* handleUpdateMovie(action: Action) {
  try {
    yield call(requestUpdateMovie, action.payload);
  } catch (error) {
    console.log(error);
  }
}
