import React from "react";
import { CommentModel } from "../../../../models/CommentModel";
import BlueTitle from "../../atoms/BlueTitle/BlueTitle";
import TextField from "../../atoms/TextField/TextField";
import AddComment from "../../molecules/MovieAddComment/AddComment";
import Comment from "../../molecules/MovieComment/Comment";
import "./MovieComments.css";

interface MovieComments {
  comments: Array<CommentModel>;
  role: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onComment: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MovieComments: React.FC<MovieComments> = ({
  value,
  comments,
  role,
  onChange,
  onComment,
}) => {
  return (
    <div className="comments">
      <BlueTitle title="Comments" />
      {role === "user" ? (
        <>
          <AddComment value={value} onComment={onComment} onChange={onChange} />
          {comments &&
            comments.map((com) => {
              if (com.approved) return <Comment comment={com} key={com.id} />;
            })}
        </>
      ) : (
        comments &&
        comments.map((com) => {
          if (com.approved) return <Comment comment={com} key={com.id} />;
        })
      )}
    </div>
  );
};

export default MovieComments;
