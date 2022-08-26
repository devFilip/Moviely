import _ from "lodash";
import { Rating } from "../models/RatingsModel";

export const calcAverageRating = (ratings: Array<Rating>) =>
  +(_.sumBy(ratings, (rating) => rating.grade) / ratings.length).toFixed(2);
