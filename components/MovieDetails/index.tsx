"use client";

import { useState } from "react";
import ReviewCard from "../ReviewCard";
import CastCard from "../CastCard";
import { review, cast } from "@/types/index";

interface tabProps {
  id: number;
  label: string;
  active: boolean;
}

interface MovieDetailsSectionProps {
  overview: string | undefined;
  movieReviews: review[];
  movieCast: cast[];
}
const MovieDetailsSection = ({
  overview,
  movieReviews,
  movieCast,
}: MovieDetailsSectionProps) => {
  const [tabs, setTabs] = useState<tabProps[]>([
    { id: 1, label: "About", active: true },
    { id: 2, label: "Reviews", active: false },
    { id: 3, label: "Cast", active: false },
  ]);
  const setActiveTab = (tabId: number) => {
    const updatedTabs = tabs.map((tab) => ({
      ...tab,
      active: tab.id === tabId, // Set the clicked tab's active to true, others to false
    }));
    setTabs(updatedTabs);
  };
  console.log(movieCast);

  return (
    <>
      <div className="tabs-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            className={`tab-button ${tab.active ? `active` : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs[0].active && <div className="about-section">{overview}</div>}
      {tabs[1].active &&
        movieReviews.map((review) => (
          <ReviewCard
            author={review.author}
            content={review.content}
            rating={review.author_details.rating}
          />
        ))}
      {tabs[2].active && (
        <div className="cast-section">
          {movieCast.map((cast) => (
            <CastCard
              key={cast.name}
              name={cast.name}
              profile_path={cast.profile_path}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MovieDetailsSection;
