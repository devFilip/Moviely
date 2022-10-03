import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/redux/toolkit/configureStore";
import { getUsers } from "../redux/redux/toolkit/userSlice";

const useUsers = () => {
  const dispatch = useDispatch();
  const runOnce = useRef(false);

  useEffect(() => {
    if (runOnce.current === false) dispatch(getUsers());

    return () => {
      runOnce.current = true;
    };
  }, [dispatch]);

  return useSelector((state: RootState) => state.users.users);
};

export default useUsers;
