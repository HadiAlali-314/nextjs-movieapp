"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import axios from "axios";
import movieProps from "@/types";
import MovieCard from "@/components/MovieCard";
import MoviesNotFoundError from "@/components/MoviesNotFoundError";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<movieProps[]>([]);
  const [moviesNotFound, setMoviesNotFound] = useState<boolean>(false);
  const serachInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  useEffect(() => {
    if (serachInputRef.current) {
      serachInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>; // defined a timer so we can clear the timeout after

    setMoviesNotFound(false);
    // call the api that fetches the movies by search query
    const searchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
          },
        }
      );
      // set the results of the api
      setSearchResults(data.results);
      if (data.results.length == 0) {
        setMoviesNotFound(true);
      }
    };
    // set a timeout to 200 ms
    timer = setTimeout(() => {
      if (searchQuery.length > 0) {
        searchMovies();
      } else if (searchQuery.length == 0) {
        setSearchResults([]);
        setMoviesNotFound(false);
      }
    }, 200);
    // clear the timer
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div>
      {/* title */}
      <Header title="Search" />
      {/* searchbar */}

      <div className={styles.searchBar}>
        <div className={styles.angle}>
          <div className={styles.content}>
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              ref={serachInputRef}
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

      {/** ilterate over the serachReults array **/}
      {searchResults.length > 0 &&
        searchResults.map((movie) => (
          <MovieCard
            key={movie.id}
            original_title={movie.original_title}
            release_date={movie.release_date}
            id={movie.id}
            backdrop_path={movie.backdrop_path}
            vote_average={movie.vote_average}
          />
        ))}
      {/** if there's no search results show the error component **/}
      {moviesNotFound && <MoviesNotFoundError />}
    </div>
  );
}
