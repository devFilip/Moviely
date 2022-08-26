import {
  requestGetFilteredMovies,
  requestGetMovie,
  requestGetMovies,
} from "../requests/movies";
import {
  setFilteredMovies,
  setMovie,
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
  } catch (error) {}
}
