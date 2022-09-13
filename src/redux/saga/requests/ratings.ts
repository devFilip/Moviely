import { RatingModel } from "../../../models/RatingsModel";
import RatingService from "../../../services/RatingService";

export const requestAddRating = (rating: RatingModel) =>
  RatingService.addRating(rating);
