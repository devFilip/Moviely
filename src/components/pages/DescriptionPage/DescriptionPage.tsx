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
import AddToWatchList from "../../UI/molecules/MovieAddWatch/AddToWatchList";
import { v4 } from "uuid";
import { addComment } from "../../../redux/redux/toolkit/commentsSlice";

const DescriptionPage = () => {
  const [commentContent, setCommentContent] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovie(id));
  }, []);
  let role = "admin";
  const movie = useSelector((state: RootState) => state.movies.movie);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };
  const handleComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!commentContent) return;

    const comment = {
      id: v4(),
      email: "random@gmail.com",
      movieId: id,
      content: commentContent,
      approved: false,
    };
    dispatch(setMovieComment({ movie, comment }));
    dispatch(addComment(comment));
  };

  const jsx = (movie: Movie) => {
    return (
      <div className="view">
        <div className="view-wrap" style={{ paddingTop: "4.5rem" }}>
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
