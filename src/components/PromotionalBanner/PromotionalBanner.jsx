import React from 'react';

const PromotionalBanner = ({
  title,
  subtitle,
  buttonText = "Buy now",
  onButtonClick,
  backgroundImage,
  backgroundColor = "from-slate-900 to-slate-800",
  textColor = "text-white",
  image,
  imageAlt = "Product image",
  disclaimer,
  className = ""
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {/* Background */}
      <div 
        className={`min-h-[300px] bg-gradient-to-r ${backgroundColor} flex items-center justify-between px-8 py-12`}
        style={backgroundImage ? { 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {}}
      >
        {/* Background overlay if background image exists */}
        {backgroundImage && (
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        )}
        
        {/* Left Content */}
        <div className="relative z-10 flex-1 max-w-lg">
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
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {buttonText}
          </button>
        </div>
        
        {/* Right Content - Image */}
        {image && (
          <div className="relative z-10 flex-1 flex justify-end items-center ml-8">
            <div className="relative">
              <img 
                src={image} 
                alt={imageAlt}
                className="max-w-full h-auto max-h-80 object-contain"
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Disclaimer */}
      {disclaimer && (
        <div className="absolute bottom-2 right-4 text-xs text-white opacity-60">
          {disclaimer}
        </div>
      )}
    </div>
  );
};

export default PromotionalBanner;
