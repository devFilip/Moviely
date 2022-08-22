import { Movie } from "../../../models/MovieModel";
import { requestGetMovies } from "../requests/movies";
import { call, put } from "redux-saga/effects";
import { setMovies } from "../../redux/toolkit/moviesSlice";
import { AxiosResponse } from "axios";

export function* handleGetMovies() {
  try {
    const response: AxiosResponse = yield call(requestGetMovies);
    yield put(setMovies([...response?.data]));
  } catch (error) {
    console.log(error);
  }
}
