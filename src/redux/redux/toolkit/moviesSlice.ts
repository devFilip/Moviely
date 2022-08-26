import { createSlice } from "@reduxjs/toolkit";
import { InputModel } from "../../../models/InputModel";
import { Movie } from "../../../models/MovieModel";
import { Action, RootState } from "./configureStore";

const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    getMovies: () => {},
    setMovies: (movies: Movie[], action): any => {
      movies = action.payload;
      return [...movies];
    },
    getFilteredMovies: (state, action: Action) => {},
    setFilteredMovies: (movies: Movie[], action): any => {
      movies = action.payload;
      return [...movies];
    },
  },
});

export const { getMovies, setMovies, getFilteredMovies, setFilteredMovies } =
  movieSlice.actions;

export default movieSlice.reducer;
