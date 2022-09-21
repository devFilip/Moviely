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
    setMovieComment: (state, action: Action) => {
      const { movie, comment } = action.payload;
      return {
        ...state,
        movie: { ...movie, comments: [...movie.comments, comment] },
      };
    },
    setMovieRating: (state, action: Action) => {
      const { movie, rating } = action.payload;
      return {
        ...state,
        movie: { ...movie, ratings: [...movie.ratings, rating] },
      };
    },
    postMovie: (state, action: Action): any => {
      const { movie } = action.payload;
      return { ...state, movies: [...state.movies, movie] };
    },
    updateMovie: (state, action: Action): any => {
      const { movie } = action.payload;
      return { ...state, movie: { ...movie } };
    },
    deleteMovie: (state, action: Action) => {
      const { id } = action.payload;
      return {
        ...state,
        movies: state.movies.filter((movie: Movie) => movie.id !== id),
      };
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
  setMovieComment,
  setMovieRating,
  postMovie,
  updateMovie,
  deleteMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
