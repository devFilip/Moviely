import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getComments } from "../redux/redux/toolkit/commentsSlice";
import { RootState } from "../redux/redux/toolkit/configureStore";

const useComments = () => {
  const dispatch = useDispatch();
  const runOnce = useRef(false);

  useEffect(() => {
    if (runOnce.current === false) {
      dispatch(getComments());

      return () => {
        runOnce.current = true;
      };
    }
  }, [dispatch]);

  return useSelector((state: RootState) => state.comments);
};

export default useComments;
