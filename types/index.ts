export default interface movieProps {
  original_title: string;
  vote_average: string;
  release_date: string;
  backdrop_path: string;
  poster_path?: string;
  id: number;
  overview?: string;
}
export interface review {
  author_details: {
    rating: string;
  };
  author: string;
  content: string;
}
export interface cast {
  name: string;
  profile_path: string;
}
