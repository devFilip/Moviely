import api from "../api/axios";
import { CommentModel } from "../models/CommentModel";

class CommentService {
  private client;
  constructor() {
    this.client = api;
  }
  addComment = (comment: CommentModel) =>
    this.client?.post(`/comments`, comment);
  getComments = () => this.client?.get("/comments");
  approveComment = (comment: CommentModel) =>
    this.client?.put(`/comments/${comment.id}`, comment);
  denyComment = (id: string) => this.client?.delete(`/comments/${id}`);
}

export default new CommentService();
