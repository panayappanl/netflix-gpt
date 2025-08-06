import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <img
        src={`${IMG_CDN_URL}${posterPath}`}
        alt="Movie Card"
        className="w-48 max-w-none pr-4"
      />
    </div>
  );
};

export default MovieCard;
