import { CommentModel } from "../../../models/CommentModel";
import { notApprovedComments } from "../../../utils/commentsHelper";
import { useState } from "react";
import BlueTitle from "../../UI/atoms/BlueTitle/BlueTitle";
import Loader from "../Loader/Loader";
import Paginate from "../../UI/atoms/Paginate/Paginate";
import PendingComment from "../../UI/organisms/PendingComment/PendingComment";
import useComments from "../../../customHooks/useComments";
import { paginate } from "../../../utils/paginate";
import { useDispatch } from "react-redux";
import {
  approveComment,
  denyComment,
} from "../../../redux/redux/toolkit/commentsSlice";
import { updateMovie } from "../../../redux/redux/toolkit/moviesSlice";
import useMovies from "../../../customHooks/useMovies";
import { findMovie } from "../../../utils/findMovie";
import "./PendingCommentsPage.css";

const PendingCommentsPage = () => {
  const [page, setPage] = useState(1);
  const movies = useMovies();
  const comments = useComments();
  const dispatch = useDispatch();

  const pageSize = 4;
  const paginatedComments = paginate(
    page,
    pageSize,
    notApprovedComments(comments)
  );

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleApprove = (obj: any) => {
    const comment: CommentModel = { ...obj, id: obj.id, approved: true };
    const [m] = findMovie(movies, obj.movieId);
    const movie = { ...m, comments: [...m.comments, comment] };
    dispatch(updateMovie(movie));
    dispatch(approveComment(comment));
  };
  const handleDeny = (id: string) => {
    dispatch(denyComment(id));
  };

  return (
    <div className="view">
      <div className="pending view-wrap">
        <BlueTitle title="Pending comments" />
        {paginatedComments.length > 0 ? (
          paginatedComments.map((comment: CommentModel) => (
            <PendingComment
              key={comment.id}
              comment={comment}
              onDeny={handleDeny}
              onApprove={handleApprove}
            />
          ))
        ) : (
          <Loader />
        )}
        <Paginate
          itemsCount={notApprovedComments(comments).length}
          pageSize={pageSize}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PendingCommentsPage;
