import PendingComment from "../../UI/organisms/PendingComment/PendingComment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../redux/redux/toolkit/moviesSlice";
import { getComments } from "../../../redux/redux/toolkit/commentsSlice";
import { RootState } from "../../../redux/redux/toolkit/configureStore";
import { CommentModel } from "../../../models/CommentModel";
import BlueTitle from "../../UI/atoms/BlueTitle/BlueTitle";
import Paginate from "../../UI/atoms/Paginate/Paginate";
import "./PendingCommentsPage.css";
const PendingCommentsPage = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getComments());
  }, []);
  const movies = useSelector((state: RootState) => state.movies.movies);
  const comments: Array<CommentModel> = useSelector(
    (state: RootState) => state.comments
  );
  const notApprovedComments = (comments: Array<CommentModel>) => {
    return comments.filter((comment) => !comment.approved);
  };
  console.log(notApprovedComments(comments));

  const handlePageChange = (page: number) => {
    console.log(page);
  };

  return (
    <div className="view">
      <div className="pending view-wrap">
        <BlueTitle title="Pending comments" />
        {notApprovedComments(comments).map((comment: CommentModel) => (
          <PendingComment key={comment.id} comment={comment} />
        ))}
        <Paginate
          itemsCount={notApprovedComments(comments).length}
          pageSize={5}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PendingCommentsPage;
