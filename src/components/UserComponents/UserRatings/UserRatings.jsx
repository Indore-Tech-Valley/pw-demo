import React from 'react';

const UserRatings = () => {
  const ratings = [
    { service: "Plumbing", stars: 5, review: "Excellent work, very professional!" },
    { service: "Salon at Home", stars: 4, review: "Great experience, just a bit delayed." }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Ratings</h1>
      {ratings.map((rating, i) => (
        <div key={i} className="mb-4 p-4 border rounded-lg">
          <h2 className="font-semibold">{rating.service}</h2>
          <p className="text-yellow-500 mt-1">{"★".repeat(rating.stars)}{"☆".repeat(5 - rating.stars)}</p>
          <p className="text-gray-600 text-sm mt-2 italic">"{rating.review}"</p>
        </div>
      ))}
    </div>
  );
};

export default UserRatings; 
