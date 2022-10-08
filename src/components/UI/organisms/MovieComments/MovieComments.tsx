import React from "react";
import { CommentModel } from "../../../../models/CommentModel";
import { approvedComments } from "../../../../utils/commentsHelper";
import BlueTitle from "../../atoms/BlueTitle/BlueTitle";
import TextField from "../../atoms/TextField/TextField";
import AddComment from "../../molecules/MovieAddComment/AddComment";
import Comment from "../../molecules/MovieComment/Comment";
import { useListingMemoized } from "../../molecules/MovieList/List";
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
  const commentss = useListingMemoized(approvedComments(comments), Comment);
  return (
    <div className="comments">
      <BlueTitle title="Comments" />
      {role === "user" ? (
        <>
          <AddComment value={value} onComment={onComment} onChange={onChange} />
          {comments && commentss}
        </>
      ) : (
        comments && commentss
      )}
    </div>
  );
};

export default MovieComments;
