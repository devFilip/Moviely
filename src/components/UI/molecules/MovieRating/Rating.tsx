import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Movie } from "../../../../models/MovieModel";
import { FaStar } from "@react-icons/all-files/fa/FaStar";

import "./Rating.css";

interface Rating {
  movie?: Movie;
  rating: number;
}

const Rating: React.FC<Rating> = ({ rating }) => {
  const [rate, setRate] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (rating) setRate(rating);
  }, [rating]);

  const handleHover = (value: number) => {
    setHover(value);
  };
  const handleRating = (value: number) => {
    if (!value || value === 0) return;

    setRate(value);
    // const data: Rating = {
    //   ...rate,
    // id: v4(),
    //   movieId: id as string,
    //   grade: value,
    // };
    // setRate(data);
    // dispatch(rateTheMovie(id as string, movie, data));
    // dispatch(addRating(data));
  };
  return (
    <div className="rating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="star"
              className="radioInput"
              value={ratingValue}
              onClick={() => {
                handleRating(+ratingValue);
              }}
            />
            <FaStar
              size={30}
              style={{ cursor: "pointer" }}
              className="star"
              color={ratingValue <= (hover || rate) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => handleHover(+ratingValue)}
              onMouseLeave={() => handleHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
