import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function Rating({ rating }) {
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < rating ? faStar : faStarHalfAlt}
          className="text-yellow-400"
        />
      ))}
    </div>
  );
}

export default Rating;
