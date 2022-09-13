import { CommentModel } from "../../../models/CommentModel";
import CommentService from "../../../services/CommentService";

export const requestAddComment = (comment: CommentModel) =>
  CommentService.addComment(comment);
