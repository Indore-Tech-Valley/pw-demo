import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PrevArrow = ({ className, style, onClick }) => {
  return null;
};

const NextArrow = ({ className, style, onClick }) => {
  return null;
};

const ServicesSlider = ({ title, services = [] }) => {
  const [slidesToShow, setSlidesToShow] = useState(8);
  const [sliderRef, setSliderRef] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Update slides per view based on window size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(2); // sm
      } else if (window.innerWidth < 768) {
        setSlidesToShow(3); // md
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(4); // lg
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(5); // xl
      } else {
        setSlidesToShow(6); // 2xl and above
      }
    };

    window.addEventListener("resize", updateSlidesPerView);
    updateSlidesPerView();

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false, // We'll use custom buttons
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    afterChange: (current) => {
      setIsBeginning(current === 0);
      setIsEnd(current + slidesToShow >= services.length);
    },
  };

  if (!services || services.length === 0) {
    return null;
  }

  return (
    <>
      {/* Desktop Slider */}
      <div className="p-6 md:px-12 w-full">
      <div className=" relative max-w-7xl mx-auto">
        <div className=" flex items-center justify-between mb-6 md:px-4 ">
          <h2 className="text-2xl font-bold text-indigo-900">{title}</h2>

          {/* Navigation buttons */}
          <div className="flex space-x-2">
            <button
              className={`p-2 rounded-full ${
                isBeginning
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-indigo-950 text-white hover:bg-indigo-800"
              }`}
              onClick={() => sliderRef?.slickPrev()}
              disabled={isBeginning}
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              className={`p-2 rounded-full ${
                isEnd
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-indigo-950 text-white hover:bg-indigo-800"
              }`}
              onClick={() => sliderRef?.slickNext()}
              disabled={isEnd}
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Centered slider container */}
        <div className="relative py-2 flex justify-between">
          <div className="w-full max-w-[1280px]">
            <Slider ref={setSliderRef} {...settings}>
              {services.map((service, index) => (
                <div key={index} className="px-2">
                  <Link
                    to={`/service/${title
                      .replace(/\s+/g, "-")}`}
                    className="block py-1"
                  >
                    <div
                      className="w-36 md:w-44 h-48  bg-white text-indigo-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-end justify-end p-3 border border-indigo-100 relative overflow-hidden"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="bg-white/80 backdrop-blur-sm w-full text-center py-1 rounded-md">
                        <p className="text-indigo-800 font-semibold text-sm tracking-wide">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Grid (commented out in original) */}
      {/* <div className="container block md:hidden mx-auto px-4">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">
          {title}
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link
              to={`/service/${service.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              key={index}
              className="flex flex-col items-center p-3 bg-white shadow-md rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2 text-gray-800 font-medium text-sm text-center">
                {service.title}
              </p>
            </Link>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default ServicesSlider;
