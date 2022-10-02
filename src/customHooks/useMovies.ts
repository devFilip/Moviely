import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/redux/toolkit/configureStore";
import { getMovies } from "../redux/redux/toolkit/moviesSlice";

const useMovies = () => {
  const runOnce = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (runOnce.current === false) {
      dispatch(getMovies());
      return () => {
        runOnce.current = true;
      };
    }
  }, [dispatch]);

  return useSelector((state: RootState) => state.movies.movies);
};

export default useMovies;
