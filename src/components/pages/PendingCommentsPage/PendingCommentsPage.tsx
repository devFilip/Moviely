import PendingComment from "../../UI/organisms/PendingComment/PendingComment";
import { useEffect } from "react";
import "./PendingCommentsPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../redux/redux/toolkit/moviesSlice";
import { getComments } from "../../../redux/redux/toolkit/commentsSlice";
import { RootState } from "../../../redux/redux/toolkit/configureStore";
import { CommentModel } from "../../../models/CommentModel";
import BlueTitle from "../../UI/atoms/BlueTitle/BlueTitle";
const PendingCommentsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getComments());
  }, []);
  const movies = useSelector((state: RootState) => state.movies.movies);
  const comments = useSelector((state: RootState) => state.comments);

  return (
    <div className="view">
      <div className="pending view-wrap">
        <BlueTitle title="Pending comments" />
        {comments.map((comment: CommentModel) =>
          !comment.approved ? (
            <PendingComment key={comment.id} comment={comment} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default PendingCommentsPage;
