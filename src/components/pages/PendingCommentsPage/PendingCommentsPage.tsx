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
import { Movie } from "../../../models/MovieModel";
import { notApprovedComments } from "../../../utils/commentsHelper";
import Loader from "../Loader/Loader";
const PendingCommentsPage = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();
  let offset = 0;
  const loadComments = (offset: number) => dispatch(getComments(offset));

  useEffect(() => {
    dispatch(getComments(0));
    window.addEventListener("scroll", (e: Event) => console.log(e), {
      once: true,
    });
  }, []);

  const comments: Array<CommentModel> = useSelector(
    (state: RootState) => state.comments
  );
  const handleScroll = (e: React.ChangeEvent<Document>) => {
    const { scrollTop, scrollHeight } = e.target.documentElement;
    if (window.innerHeight + scrollTop >= scrollHeight) {
      offset += 6;
      loadComments(offset);
    }
  };

  const handlePageChange = () => {
    console.log("page");
  };

  return (
    <div className="view">
      <div className="pending view-wrap">
        <BlueTitle title="Pending comments" />
        {comments.length > 0 ? (
          notApprovedComments(comments).map((comment: CommentModel) => (
            <PendingComment key={comment.id} comment={comment} />
          ))
        ) : (
          <Loader />
        )}
        {/* <Paginate
          itemsCount={notApprovedComments(comments).length}
          pageSize={5}
          currentPage={page}
          onPageChange={handlePageChange}
        /> */}
      </div>
    </div>
  );
};

export default PendingCommentsPage;
