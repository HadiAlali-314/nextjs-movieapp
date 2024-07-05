import "./index.css";
interface ReviewCardProps {
  rating: string;
  author: string;
  content: string;
}
const ReviewCard = ({ rating, author, content }: ReviewCardProps) => {
  return (
    <div className="review-container">
      <div className="left-side">
        <img src="/Ellipse.png" alt="" />
        <p>{rating}</p>
      </div>
      <div className="right-side">
        <h1>{author}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
