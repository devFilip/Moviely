import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/redux/toolkit/configureStore";
import { getMovie } from "../redux/redux/toolkit/moviesSlice";

export const useMovie = (id: string | undefined) => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    dispatch(getMovie(id));
  });
  const m = useSelector((state: RootState) => state.movies.movie);
  setMovie(m);
  return movie;
};
