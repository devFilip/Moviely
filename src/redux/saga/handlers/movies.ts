import { requestGetFilteredMovies, requestGetMovies } from "../requests/movies";
import { setFilteredMovies, setMovies } from "../../redux/toolkit/moviesSlice";
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
    yield put(setFilteredMovies([...response?.data]));
  } catch (error) {
    console.log(error);
  }
}
