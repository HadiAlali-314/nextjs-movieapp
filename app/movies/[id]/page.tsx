import axios from "axios";
import movieProps from "@/types";
import { notFound } from "next/navigation";
import "./index.css";
import MovieDetailsSection from "@/components/MovieDetails";
import Header from "@/components/Header/Header";
async function getMovieDetails(id: string) {
  let movieDetails: movieProps | undefined;
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
      }
    );
    movieDetails = data;
  } catch (error) {
    console.log(error);
  }
  return movieDetails;
}
async function getMovieReviews(id: string) {
  let movieReviews;
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
      }
    );
    movieReviews = data.results;
  } catch (error) {
    console.log(error);
  }
  return movieReviews;
}
async function getMovieCast(id: string) {
  let movieCast;
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=THE_KEY&language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
      }
    );
    movieCast = data.cast;
  } catch (error) {
    console.log(error);
  }
  return movieCast;
}

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const movieDetails = await getMovieDetails(params.id);
  const movieReviews = await getMovieReviews(params.id);
  const movieCast = await getMovieCast(params.id);
  if (!movieDetails) {
    notFound();
  }
  return (
    <>
      <Header title="Details" />

      <div className="details-container">
        <img
          className="backdrop"
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
          alt=""
        />
        <div className="movie-details">
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
              alt=""
            />
          </div>
        </div>
        <div className="rating-container">
          <div className="rating">
            <i className="fa-regular fa-star"></i>
            <p className="rating">{movieDetails.vote_average}</p>
          </div>
        </div>
        <div className="title">
          <h1>{movieDetails.original_title}</h1>
        </div>
      </div>
      <div className="description">
        <div className="release-date">
          <i className="fa-regular fa-calendar"></i>
          <h4>2021</h4>
        </div>
        <div className="vector">|</div>
        <div className="time">
          <i className="fa-regular fa-clock"></i>
          <h4>2021</h4>
        </div>
        <div className="vector">|</div>
        <div className="genre">
          <i className="fa-solid fa-ticket"></i>
          <h4>2021</h4>
        </div>
      </div>
      <MovieDetailsSection
        overview={movieDetails.overview}
        movieReviews={movieReviews}
        movieCast={movieCast}
      />
    </>
  );
}
