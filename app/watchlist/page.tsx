import React from "react";
import styles from "./page.module.css";
import MovieCard from "@/components/MovieCard";

const watchlist = () => {
  return (
    <div>
      {/* title */}
      <div className={styles.title}>
        <i className="fa-solid fa-arrow-left"></i>
        <h1>WatchList</h1>
        <i className="fa-solid fa-circle-exclamation"></i>
      </div>

      {/*  POSTER   */}
      <MovieCard
        original_title="test"
        vote_average="10"
        release_date="2020"
        backdrop_path="/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg"
      />
    </div>
  );
};

export default watchlist;
