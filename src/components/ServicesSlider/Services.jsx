import React from 'react';
import { Star } from 'lucide-react';

const Services = ({ title, products }) => {
  const formatPrice = (price) => `₹${price}`;
  const formatRating = (rating) => rating.toFixed(1);
  const formatReviews = (reviews) => {
    if (reviews >= 1000000) return `${(reviews / 1000000).toFixed(1)}M`;
    if (reviews >= 1000) return `${(reviews / 1000).toFixed(0)}K`;
    return reviews.toString();
  };

  return (
    <div className='p-6 md:px-12 w-full'>
    <div className=" max-w-7xl mx-auto">
      {/* Title Row */}
      <div className="flex items-center justify-between mb-6 md:px-4 mx-auto ">
        <h2 className="text-2xl font-bold text-indigo-900">{title}</h2>
        <a href="#" className="text-violet-600 font-medium text-sm hover:underline">
          See all
        </a>
      </div>

      {/* Horizontal Scrollable Card Container */}
      <div
        className="overflow-x-auto overflow-y-hidden -mx-4 px-4"
        style={{
          scrollbarWidth: 'none',         // Firefox
          msOverflowStyle: 'none',        // IE/Edge
        }}
      >
        <div
          className="flex gap-4 pr-4"
          style={{
            overflowY: 'hidden',
          }}
        >
          {/* Hide scrollbar for WebKit (Chrome, Safari) */}
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {products.map((product, index) => (
            <div
              key={index}
              className="w-[200px] flex-shrink-0 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition duration-200"
            >
              {/* Image */}
              <div className="relative w-full aspect-square bg-gray-100">
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-green-600 text-white px-1.5 py-0.5 rounded text-xs font-medium z-10">
                    {product.discount}% OFF
                  </div>
                )}
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="text-3xl">🔧</div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium text-gray-900">
                    {formatRating(product.rating)}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({formatReviews(product.reviews)})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-xs text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
