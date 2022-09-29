import { CommentModel } from "../models/CommentModel";

export const notApprovedComments = (comments: Array<CommentModel>) =>
  comments.filter((comment) => !comment.approved);

export const approvedComments = (comments: Array<CommentModel>) =>
  comments.filter((comment) => comment.approved);
