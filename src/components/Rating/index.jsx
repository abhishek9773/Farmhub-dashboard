import clsx from "clsx";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, className }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => {
      const starRating = rating - index;
      if (starRating >= 1)
        return <FaStar key={index} className="text-yellow-500" />;
      if (starRating >= 0.5)
        return <FaStarHalfAlt key={index} className="text-yellow-500" />;
      return <FaRegStar key={index} className="text-yellow-500" />;
    });

  return <div className={`${clsx("flex", className)}`}>{stars}</div>;
};

export default StarRating;
