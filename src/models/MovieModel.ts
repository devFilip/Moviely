import { Comment } from "./CommentModel";
import { RatingModel } from "./RatingsModel";

export interface Movie {
  id: string;
  title: string;
  genre: string;
  year: number;
  runtime: number;
  imageUrl: string;
  country: string;
  description: string;
  comments: Array<Comment>;
  ratings: Array<RatingModel>;
  movieTrailer: string;
}

export interface MovieLabel {
  title: string;
  genre: string;
  year: number;
  runtime: number;
}
