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
}

export default new CommentService();
