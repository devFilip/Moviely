import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../../models/MovieModel";

const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    getMovies: () => {},
    setMovies: (state: Movie[], action): any => {
      state = action.payload;
      return [...state];
    },
    getFilteredMovies: () => {},
    setFilteredMovies: () => {},
  },
});

export const { getMovies, setMovies } = movieSlice.actions;

export default movieSlice.reducer;
