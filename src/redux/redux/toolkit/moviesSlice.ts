import { createSlice } from "@reduxjs/toolkit";
import { InputModel } from "../../../models/InputModel";
import { Movie } from "../../../models/MovieModel";
import { RootState } from "./configureStore";

const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    getMovies: () => {},
    setMovies: (movies: Movie[], action): any => {
      movies = action.payload;
      return [...movies];
    },
    getFilteredMovies: () => {},
    setFilteredMovies: (movies: Movie[], action): any => {
      movies = action.payload;
      return [...movies];
    },
  },
});

export const { getMovies, setMovies, getFilteredMovies, setFilteredMovies } =
  movieSlice.actions;

export default movieSlice.reducer;
