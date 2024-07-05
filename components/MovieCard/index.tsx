import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import movieProps from "@/types";

const MovieCard = ({
  original_title,
  vote_average,
  release_date,
  backdrop_path,
  id,
}: movieProps) => {
  return (
    <Link href={`/movies/${id}`} className={styles.moviePoster}>
      <div className={styles.posterImage}>
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt=" "
        />
      </div>
      <div className={styles.posterInfo}>
        <h2 className={styles.title}>{original_title}</h2>
        <h6 className={styles.star}>
          <i className="fa-regular fa-star" />
          <p className={styles.rating}>{vote_average}</p>
        </h6>
        <div className={styles.genre}>
          <i className="fa-solid fa-ticket" />
          <p className={styles.text}>Action</p>
        </div>
        <div className={styles.releaseDate}>
          <i className="fas fa-calendar" />
          <p className={styles.text2}>{release_date}</p>
        </div>
        <div className={styles.duration}>
          <i className="fas fa-clock" />
          <p className={styles.text3}>139 minutes</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
