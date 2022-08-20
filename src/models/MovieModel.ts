import { Comment } from "./CommentModel";
import { Rating } from "./RatingsModel";

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
  ratings: Array<Rating>;
  movieTrailer: string;
}
