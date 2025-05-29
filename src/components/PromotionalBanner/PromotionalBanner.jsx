import React from 'react';

const PromotionalBanner = ({
  title,
  subtitle,
  buttonText = "Buy now",
  onButtonClick,
  backgroundImage,
  overlayOpacity = 50, // customize overlay darkness
  textColor = "text-white",
  disclaimer,
  className = ""
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className='p-6 md:px-12 w-full'>
    <div className={`relative overflow-hidden rounded-xl max-w-7xl mx-auto ${className}`}>
      {/* Background Image with Overlay */}
      <div
        className="min-h-[300px] bg-cover bg-center flex items-center px-8 py-12 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/[${
          overlayOpacity
        }] z-0`}></div>

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 leading-tight ${textColor}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-lg md:text-xl mb-8 opacity-90 ${textColor}`}>
              {subtitle}
            </p>
          )}
          <button
            onClick={handleButtonClick}
            aria-label={buttonText}
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {buttonText}
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      {/* {disclaimer && (
        <div className="absolute bottom-2 right-4 text-xs text-white font-bold p-2 opacity-60 z-10">
        //   {disclaimer}
        // </div>
      )} */}
    </div>
    </div>
  );
};

export default PromotionalBanner;
