import { CommentModel } from "../../../models/CommentModel";
import CommentService from "../../../services/CommentService";

export const requestAddComment = (comment: CommentModel) =>
  CommentService.addComment(comment);
export const requestGetComments = () => CommentService.getComments();
export const requestApproveComment = (comment: CommentModel) =>
  CommentService.approveComment(comment);
export const requestDenyComment = (id: string) =>
  CommentService.denyComment(id);
