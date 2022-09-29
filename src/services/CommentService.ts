import api from "../api/axios";
import { CommentModel } from "../models/CommentModel";

class CommentService {
  private client;
  constructor() {
    this.client = api;
  }
  addComment = (comment: CommentModel) =>
    this.client?.post(`/comments`, comment);
  getComments = (offset: number) =>
    this.client?.get(`/comments?_limit=6&_offset=${offset}`);
}

export default new CommentService();
