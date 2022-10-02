import { CommentModel } from "../../../models/CommentModel";
import { notApprovedComments } from "../../../utils/commentsHelper";
import { useState } from "react";
import BlueTitle from "../../UI/atoms/BlueTitle/BlueTitle";
import Loader from "../Loader/Loader";
import Paginate from "../../UI/atoms/Paginate/Paginate";
import PendingComment from "../../UI/organisms/PendingComment/PendingComment";
import useComments from "../../../customHooks/useComments";
import "./PendingCommentsPage.css";
import { paginate } from "../../../utils/paginate";

const PendingCommentsPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 4;
  const comments = useComments();
  const paginatedComments = paginate(
    page,
    pageSize,
    notApprovedComments(comments)
  );

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="view">
      <div className="pending view-wrap">
        <BlueTitle title="Pending comments" />
        {paginatedComments.length > 0 ? (
          paginatedComments.map((comment: CommentModel) => (
            <PendingComment key={comment.id} comment={comment} />
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
