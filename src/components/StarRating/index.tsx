import React, { FC } from 'react';
import { Star } from '../../Atoms/Star';

interface StarRatingProps {
  rating: number;
}

const StarRating: FC<StarRatingProps> = ({ rating }) => {
  // Round the rating to the nearest half star
    const roundedRating = Math.round(rating * 2) / 2;

  // Generate an array of stars based on the rounded rating
  const stars = Array.from({ length: 5 }, (_, index) => index + 0.5 <= roundedRating);

  return (
    <div className="flex items-center">
      {stars.map((filled, index) => (
        <svg
          key={index}
          className={`h-6 w-6 ${filled ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
        >
          <Star />
        </svg>
      ))}
      <span className="ml-2">{roundedRating}</span>
    </div>
  );
};

export default StarRating;
