import { CommentModel } from "../../../../models/CommentModel";
import "./Comment.css";
interface Comment {
  comment: CommentModel;
}
const Comment: React.FC<Comment> = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment__user">
        <img className="user__img" src="/images/man.png" alt="" />
        <span>my-username</span>
      </div>
      <div className="comment__content">{comment.content}</div>
    </div>
  );
};

export default Comment;
