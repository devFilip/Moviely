import { useDispatch, useSelector } from "react-redux";
import React, { TextareaHTMLAttributes, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Movie } from "../../../models/MovieModel";
import { RootState } from "../../../redux/redux/toolkit/configureStore";
import {
  deleteMovie,
  getMovie,
  setMovieComment,
} from "../../../redux/redux/toolkit/moviesSlice";
import MovieDetails from "../../UI/organisms/MovieDetails/MovieDetails";
import MovieComments from "../../UI/organisms/MovieComments/MovieComments";
import AddToWatchList from "../../UI/molecules/MovieAddWatch/AddToWatchList";
import { v4 } from "uuid";
import { addComment } from "../../../redux/redux/toolkit/commentsSlice";
import MovieAlertModal from "../../UI/molecules/MovieAlertModal/MovieAlertModal";
import Loader from "../Loader/Loader";

const DescriptionPage = () => {
  const [commentContent, setCommentContent] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovie(id));
  }, [id, dispatch]);
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
    setCommentContent("");
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleDelete = () => {
    dispatch(deleteMovie(id));
    setTimeout(() => navigate("/"), 100);
  };

  const jsx = (movie: Movie) => {
    return (
      <div className="view">
        <div className="view-wrap" style={{ paddingTop: "4.5rem" }}>
          <MovieDetails movie={movie} role={role} onModal={handleModal} />
          {showModal && (
            <MovieAlertModal onDelete={handleDelete} onModal={handleModal} />
          )}
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
  if (Object.keys(movie).length === 0) return <Loader />;
  return jsx(movie as Movie);
};

export default DescriptionPage;
