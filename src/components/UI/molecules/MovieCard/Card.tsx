import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../../../models/MovieModel";
import { displayRating } from "../../../../utils/averageRating";
import Button from "../../atoms/Button/Button";
import MovieAlertModal from "../MovieAlertModal/MovieAlertModal";

import "./Card.css";
interface Card {
  item: Movie;
  modal: boolean;
  onModal: () => void;
  onDelete?: (id: string) => void;
}

const Card: React.FC<Card> = ({ item, modal, onModal, onDelete }) => {
  const handleDelete = () => {
    onModal();
    if (onDelete) onDelete(item.id);
  };
  return (
    <>
      {modal && (
        <MovieAlertModal
          onDelete={() => console.log("delete")}
          onModal={onModal}
        />
      )}
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
                style={styles.imgComment}
                src="images/comment.png"
              />
            </div>
            <div className="card__item">
              <p className="card__item__number">{displayRating(item)}</p>
              <img
                className="icon__img__xs"
                style={styles.imgStar}
                src="images/star.png"
              />
            </div>
          </div>
        </div>
        <p className="card__item__description">{item.description}</p>
        <div className="card__buttons">
          <Link to={`/movieForm/${item.id}`} className="card__button__edit">
            <Button style={styles.edit} text="Edit" />
          </Link>
          <Button style={styles.delete} text="Delete" onClick={onModal} />
        </div>
      </div>
    </>
  );
};
const styles = {
  delete: {
    color: "black",
    background: "rgba(244, 36, 36, 0.3)",
    width: "40%",
  },
  edit: {
    color: "black",
    background: "rgba(37, 150, 190, 0.5)",
    width: "100%",
  },
  imgStar: { transform: `translateY(${-2}px)` },
  imgComment: { opacity: "50%" },
};

export default Card;
