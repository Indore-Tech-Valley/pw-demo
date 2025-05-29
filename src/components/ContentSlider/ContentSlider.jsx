import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContentSlider = ({ banners }) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamic settings based on screen size
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  // Custom arrow components
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-white rounded-full shadow-lg p-2 !flex items-center justify-center z-10`}
        style={{ ...style, display: "flex", width: "40px", height: "40px", right: "-10px" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-white rounded-full shadow-lg p-2 !flex items-center justify-center z-10`}
        style={{ ...style, display: "flex", width: "40px", height: "40px", left: "-10px" }}
        onClick={onClick}
      />
    );
  };

  // Check if banners exist before rendering
  if (!banners || banners.length === 0) {
    return null;
  }

  return (
    <div className=" p-6 md:px-12 w-full">
      
      <div className="relative max-w-7xl mx-auto">
        <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
          {banners.map((banner, index) => (
            <div key={index} className="px-2">
  <div
    onClick={() => navigate(`${banner.link}`)}
    className="relative cursor-pointer rounded-2xl overflow-hidden bg-white border  border-gray-300 transition-all duration-300 flex h-64 md:h-72"
  >
    {/* Left Content Section */}
    <div className="flex flex-col justify-center px-6 w-2/3 md:w-3/5 ">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
        {banner.title}
      </h2>
      <p className="text-sm text-gray-700 mb-4">{banner.description}</p>
      <p className="text-lg font-bold text-indigo-600 mb-2">{banner.price}</p>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-fit"
        onClick={() => navigate(`${banner.link}`)}
      >
        Book now
      </button>
    </div>

    {/* Right Image Section */}
    <div className="w-1/3 md:w-2/5 h-full">
      <img
        src={banner.image}
        alt={banner.title}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
  
          ))}
        </Slider>
      </div>
      
      {/* Progress indicator */}
      {/* <div className="mt-6 flex justify-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100">
    
        </div>
      </div> */}
    </div>
  );
};

export default ContentSlider;