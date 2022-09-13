import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../../../models/MovieModel";
import { displayRating } from "../../../../utils/averageRating";
import Button from "../../atoms/Button/Button";

import "./Card.css";
interface Card {
  item: Movie;
}

const Card: React.FC<Card> = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/movie/${item.id}`} className="card__poster">
        <img className="card__img" src={item.imageUrl} alt="movie image" />
      </Link>
      <div className="card__title">
        <span className="title">{item.title}</span>
        <div className="card__items">
          <div className="card__item card--margin">
            <p className="card__item__number">{item.comments.length}</p>
            <img
              className="icon__img__xs"
              style={{ opacity: "50%" }}
              src="images/comment.png"
              alt=""
            />
          </div>
          <div className="card__item">
            <p className="card__item__number">{displayRating(item)}</p>
            <img
              className="icon__img__xs"
              style={{ transform: `translateY(${-2}px)` }}
              src="images/star.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <p className="card__item__description">{item.description}</p>
      <div className="card__buttons">
        <div className="card__button__edit">
          <Button
            textColor="black"
            color="rgba(37, 150, 190, 0.5)"
            text="Edit"
            size="100%"
          />
        </div>
        <Button
          textColor="black"
          color="rgba(244, 36, 36, 0.3)"
          text="Delete"
          size="40%"
        />
      </div>
    </div>
  );
};

export default Card;
