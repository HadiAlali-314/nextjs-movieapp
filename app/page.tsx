"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import movieProps from "@/types";
import Link from "next/link";

const pagehome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popularMovies, setPublarMovies] = useState<movieProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
          },
        }
      );
      setPublarMovies(data.results);
    };
    fetchPopularMovies();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 10 ? prevIndex : prevIndex + 1
    );
  };
  return (
    <div>
      {/* elemants */}

      <div>
        <div className={styles.what}>
          <h2>What do you want to watch?</h2>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.angle}>
            <div className={styles.content}>
              <input
                onClick={() => router.push("/search")}
                placeholder="Search"
                type="search"
              />
            </div>
            <div className={styles.searchBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <ellipse
                  cx="7.57177"
                  cy="7.4819"
                  rx="7.57177"
                  ry="7.4819"
                  transform="matrix(-1 0 0 1 17.178 1)"
                  stroke="#67686D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.33984 14.0743L1.37128 17"
                  stroke="#67686D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.movieSlider}>
            <div className={styles.sliderContainer}>
              <div
                className={styles.slider}
                style={{
                  transform: `translateX(-${currentIndex * (144 + 30)}px)`,
                }}
              >
                {popularMovies.map((movie: movieProps) => (
                  <Link href={`/movies/${movie.id}`} className={styles.slide}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt="Movie 1"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <button className={styles.prevButton} onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              </svg>
            </button>
            <button className={styles.nextButton} onClick={nextSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6.59 16.59L11.17 12 6.59 7.41 8 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>
          </div>

          {/* tabs bar middle  */}
          <div className={styles.tabsBar}>
            <button className={styles.tabButton2}>Now playing</button>
            <button className={styles.tabButton}>Upcoming</button>
            <button className={styles.tabButton}>Top rated</button>
            <button className={styles.tabButton}>Popular</button>

            <div className={styles.activeLine}></div>
          </div>

          <div className={styles.movieposters}>
            <div className={styles.row}>
              <div className={styles.poster}>
                <img src="/1.png" alt="Movie 1" />
              </div>
              <div className={styles.poster}>
                <img src="/2.png" alt="Movie 2" />
              </div>
              <div className={styles.poster}>
                <img src="/3.png" alt="Movie 3" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.poster}>
                <img src="/4.png" alt="Movie 4" />
              </div>
              <div className={styles.poster}>
                <img src="/5.png" alt="Movie 5" />
              </div>
              <div className={styles.poster}>
                <img src="/6.png" alt="Movie 6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
    </div>
  );
};

export default pagehome;
