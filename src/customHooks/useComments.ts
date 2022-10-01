import { useDispatch } from "react-redux";
import { getComments } from "../redux/redux/toolkit/commentsSlice";
import { useState, useEffect } from "react";

const dispatch = useDispatch();

const useComments = (page: number = 1) => {
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [results, setResults] = useState<any>([]);
  const [error, setError] = useState<any>({});

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    return () => controller.abort();
  }, [page]);

  return { hasNextPage, isError, isLoading, results, error };
};

export default useComments;
