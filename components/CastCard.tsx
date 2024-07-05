import React from "react";
import { cast } from "@/types/index";

const CastCard = ({ name, profile_path }: cast) => {
  return (
    <div className="cast-card">
      <img
        src={`https://image.tmdb.org/t/p/original${profile_path}`}
        alt="profile img"
      />
      <h1>{name}</h1>
    </div>
  );
};

export default CastCard;
