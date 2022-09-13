import api from "../api/axios";
import { RatingModel } from "../models/RatingsModel";

class Rating {
  private client;

  constructor() {
    this.client = api;
  }

  addRating = (rating: RatingModel) => this.client?.post("/ratings", rating);
}
export default new Rating();
