import { useDispatch, useSelector } from "react-redux";
import React, { TextareaHTMLAttributes, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../../models/MovieModel";
import { RootState } from "../../../redux/redux/toolkit/configureStore";
import {
  getMovie,
  setMovieComment,
} from "../../../redux/redux/toolkit/moviesSlice";
import MovieDetails from "../../UI/organisms/MovieDetails/MovieDetails";
import MovieComments from "../../UI/organisms/MovieComments/MovieComments";
import { getUsers } from "../../../redux/redux/toolkit/userSlice";
import Button from "../../UI/atoms/Button/Button";
import AddToWatchList from "../../UI/molecules/MovieAddWatch/AddToWatchList";

const DescriptionPage = () => {
  const [commentContent, setCommentContent] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovie(id));
    dispatch(getUsers());
  }, []);
  let role = "user";
  const movie = useSelector((state: RootState) => state.movies.movie);
  const users = useSelector((state: RootState) => state.users.users);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };
  // id: string;
  // email: string;
  // movieId: string;
  // content: string;
  // approved: boolean;
  const handleComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const commentObj = {
      email: "random@gmail.com",
      movieId: id,
      content: commentContent,
      approved: true,
    };
    dispatch(setMovieComment(commentObj));
    console.log(commentContent);
  };

  const jsx = (movie: Movie) => {
    return (
      <div className="view">
        <div className="view-wrap">
          <MovieDetails movie={movie} role={role} />
          {role !== "admin" ? <AddToWatchList /> : ""}
          <MovieComments
            role={role}
            comments={movie.comments}
            onComment={handleComment}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  };
  return jsx(movie as Movie);
};

export default DescriptionPage;
