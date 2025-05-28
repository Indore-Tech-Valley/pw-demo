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
    <div className="py-8 px-2 md:px-8 lg:px-12">
      
      <div className="relative">
        <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
          {banners.map((banner, index) => (
            <div key={index} className="px-2">
              <div
                onClick={() => navigate(`${banner.link}`)}
                className="relative cursor-pointer rounded-xl overflow-hidden  transition-all duration-300  group h-64 md:h-72"
              >
                {/* Background gradient with overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-indigo-800 opacity-95"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-700 rounded-full -mt-8 -mr-8 opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-600 rounded-full -mb-6 -ml-6 opacity-50"></div>
                
                {/* Content */}
                <div className="relative p-6 flex flex-col justify-between h-full z-10">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      {/* <img src="/tvmartlogo.png" className="w-14 h-10 rounded-md" alt="Logo" /> */}
                     
                    </div>
                    <span className="text-xs px-4 py-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold rounded-full shadow-md">
                      {banner.tag}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{banner.title}</h2>
                    <p className="text-sm text-white text-opacity-80 w-full md:w-3/5 line-clamp-2">{banner.description}</p>
                  </div>

                  <div className="flex justify-between items-end mt-4">
                    <div>
                      {/* <p className="text-xs text-white text-opacity-75 mb-1">Limited Time</p> */}
                      <div className="flex items-center">
                        <p className="text-xl font-bold text-white">{banner.price}</p>
                        {banner.oldPrice && (
                          <p className="text-sm text-white text-opacity-75 line-through ml-2">{banner.oldPrice}</p>
                        )}
                      </div>
                      <button className="mt-2 bg-white font-bold font-sans hover:bg-orange-400 hover:text-white text-indigo-900 text-sm py-1 px-4 rounded-lg "
                      onClick={() => navigate(`${banner.link}`)}
                      >
                        Visit Products
                      </button>
                    </div>
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="absolute right-4 bottom-4 w-32 h-24 md:w-36 md:h-28 object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />
                  </div>
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