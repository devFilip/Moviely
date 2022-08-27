import _ from "lodash";
import { Movie } from "../models/MovieModel";
import { RatingModel } from "../models/RatingsModel";

const calcAverageRating = (ratings: Array<RatingModel>) =>
  +(_.sumBy(ratings, (rating) => rating.grade) / ratings.length).toFixed(2);

export const displayRating = (movie: Movie) => {
  return Object.keys(movie).length !== 0
    ? calcAverageRating(movie?.ratings)
    : 5;
};
