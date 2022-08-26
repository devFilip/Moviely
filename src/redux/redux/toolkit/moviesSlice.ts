import { createSlice } from "@reduxjs/toolkit";
import { InputModel } from "../../../models/InputModel";
import { Movie } from "../../../models/MovieModel";
import { Action, RootState } from "./configureStore";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movie: {},
  },
  reducers: {
    getMovies: () => {},
    setMovies: (state, action): any => {
      return { ...state, movies: action.payload };
    },
    getFilteredMovies: (state, action: Action) => {},
    setFilteredMovies: (state, action: Action): any => {
      return { ...state, movies: action.payload };
    },
    getMovie: (state, action: Action) => {},
    setMovie: (state, action: Action): any => {
      return { ...state, movie: action.payload };
    },
  },
});

export const {
  getMovies,
  setMovies,
  getFilteredMovies,
  setFilteredMovies,
  getMovie,
  setMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
