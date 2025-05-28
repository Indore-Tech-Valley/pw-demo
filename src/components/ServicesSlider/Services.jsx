
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Services = ({ title, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5; // Number of items visible at once
  const maxIndex = Math.max(0, products.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const formatPrice = (price) => {
    return `₹${price}`;
  };

  const formatRating = (rating) => {
    return rating.toFixed(1);
  };

  const formatReviews = (reviews) => {
    if (reviews >= 1000000) {
      return `${(reviews / 1000000).toFixed(1)}M`;
    } else if (reviews >= 1000) {
      return `${(reviews / 1000).toFixed(0)}K`;
    }
    return reviews.toString();
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out gap-3"
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className="flex-none w-1/5 min-w-0">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                {/* Image Container */}
                <div className="relative aspect-square bg-gray-100">
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
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm line-clamp-2">
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
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;