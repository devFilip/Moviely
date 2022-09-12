import api from "../api/axios";
import { CommentModel } from "../models/CommentModel";

class CommentService {
  client;
  constructor() {
    this.client = api;
  }
  addComment = (comment: CommentModel) =>
    this.client?.post(`/comments`, comment);
}

export default new CommentService();
