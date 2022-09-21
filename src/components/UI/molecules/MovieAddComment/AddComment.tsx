import Button from "../../atoms/Button/Button";
import TextField from "../../atoms/TextField/TextField";
import "./AddComment.css";

interface AddComment {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onComment: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AddComment: React.FC<AddComment> = ({ onChange, onComment }) => {
  return (
    <div className="addComment">
      <div className="addComment__user">
        <img className="user__img" src="/images/man.png" alt="" />
        <span>my-username</span>
      </div>
      <form className="addComment__content" onSubmit={(e) => onComment(e)}>
        <div className="addComment__content__field">
          <TextField
            placeholder="Leave your comment"
            onChange={(e) => onChange(e)}
          />
        </div>
        <Button style={styles.submit} text="Submit" />
      </form>
    </div>
  );
};
const styles = {
  submit: {
    fontSize: "2rem",
    color: "white",
    width: "15%",
    background: "#2596BE",
    padding: "3rem",
  },
};

export default AddComment;
