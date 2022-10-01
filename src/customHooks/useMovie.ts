import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHref } from "react-router-dom";
import { RootState } from "../redux/redux/toolkit/configureStore";
import { getMovie } from "../redux/redux/toolkit/moviesSlice";

export const useMovie = (id: string) => {
  // if (!id) return null;
  const runOnce = useRef(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (runOnce.current === false) {
      dispatch(getMovie(id));
      return () => {
        runOnce.current = true;
      };
    }
  }, [id]);
  return useSelector((state: RootState) => state.movies.movie);
};
