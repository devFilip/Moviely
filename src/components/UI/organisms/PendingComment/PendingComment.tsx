import { CommentModel } from "../../../../models/CommentModel";
import { Movie } from "../../../../models/MovieModel";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import "./PendingComment.css";

interface PendingComment {
  comment: CommentModel;
}

const PendingComment: React.FC<PendingComment> = ({ comment }) => {
  const movieName = (movie: Movie) => {
    return movie.title;
  };
  const username = (comment: CommentModel) => {
    if (comment && comment.email) {
      const index = comment.email.indexOf("@");
      return comment.email.substring(0, index);
    }
    return "username";
  };
  return (
    <div className="pending-comment">
      <div className="pending-comment__icons">
        <Icon
          iconSrc="/images/user-2.png"
          label={username(comment)}
          iconStyle={styles.iconUser}
        />
        <Icon
          iconSrc="/images/video.png"
          label={"movie"}
          iconStyle={styles.iconMovie}
        />
      </div>
      <div className="pending-comment__content">
        <Icon iconSrc="/images/comment.png" iconStyle={styles.iconComment} />
        <p>{comment.content}</p>
      </div>
      <div className="pending-comment__buttons">
        <Button text="Approve" style={styles.approve} />
        <Button text="Deny" style={styles.deny} />
      </div>
    </div>
  );
};
const styles = {
  approve: {
    background: "rgba(37, 150, 190, 0.5)",
    color: "white",
    width: "60%",
    padding: "1rem",
  },
  deny: {
    background: "rgba(244, 36, 36, 0.5)",
    color: "white",
    width: "60%",
    padding: "1rem",
  },
  iconUser: {
    marginBottom: "1rem",
    opacity: "50%",
  },
  iconMovie: {
    opacity: "50%",
  },
  iconComment: {
    transform: `translateY(${-20}px)`,
    opacity: "50%",
  },
};

export default PendingComment;
