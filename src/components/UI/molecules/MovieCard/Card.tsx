import React from "react";
import { Comment } from "../../../../models/CommentModel";
import { Rating } from "../../../../models/RatingsModel";
import Button from "../../atoms/Button/Button";

import "./Card.css";
interface Card {
  item: {
    imageUrl: string;
    title: string;
    comments: Array<Comment>;
    ratings: Array<Rating>;
    description: string;
  };
}

const Card: React.FC<Card> = ({ item }) => {
  return (
    <div className="card">
      <img className="user__img" src={item.imageUrl} alt="" />
      <div className="card__desc">
        <span>{item.title}</span>
        <p className="card__item">
          {item.comments.length}
          <img className="icon__img__xs" src="images/comment.png" alt="" />
        </p>
        <p className="card__item">
          {item.ratings.length}
          <img className="icon__img__xs" src="images/star.png" alt="" />
        </p>
      </div>
      <p className="card__item">{item.description}</p>
      <div className="card__buttons">
        <div className="card__button__edit">
          <Button
            textColor="black"
            color="rgba(37, 150, 190, 0.5)"
            text="Edit"
            size="100px"
          />
        </div>
        <Button
          textColor="black"
          color="rgba(244, 36, 36, 0.3)"
          text="Delete"
          size="100px"
        />
      </div>
    </div>
  );
};

export default Card;
