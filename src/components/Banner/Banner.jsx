import React, { useRef, useEffect, useState } from "react";
import { Star, Users } from "lucide-react";
import { CiStar } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import acImage from './BannerImages/ac.jpg';
import cleaningImage from './BannerImages/cleaning.jpg';
import girlImage from './BannerImages/girl.jpg';
import tapImage from './BannerImages/tap.jpg';
import waterPurifierImage from './BannerImages/water_purifier.jpg';
import boy from './BannerImages/boy.jpg';



import { Navigate, useNavigate } from "react-router-dom";

const Banner = () => {
  const leftRef = useRef(null);
  const navigate=useNavigate();
  const [leftHeight, setLeftHeight] = useState(0);

  useEffect(() => {
    if (leftRef.current) {
      setLeftHeight(leftRef.current.offsetHeight + 40);
    }
  }, []);

  const services = [
    {
      title: "Women's Salon & Spa",
      icon: girlImage,
    },
    {
      title: "Men's Salon & Massage",
      icon: boy,
    },
    {
      title: "AC & Appliance Repair",
      icon: acImage,

    },
    {
      title: "Cleaning",
      icon: cleaningImage,
  
    },
    {
      title: "Electrician, Plumber & Carpenter",
      icon: tapImage,
  
    },
    {
      title: "Water Purifier",
      icon: waterPurifierImage,
    },
  ];

  return (
    <div className=" p-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div ref={leftRef} className="space-y-8">
            <h1 className="text-3xl md:text-4xl  font-semibold text-gray-900 leading-tight">
              Home services at your <span className="block">doorstep</span>
            </h1>

            <div className="rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-700 mb-6 ">
                What are you looking for?
              </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-stretch ">
  {services.map((service, index) => (
  <div
    key={index}
    onClick={() => navigate(`/service/Salon-for-Women`)}
    className="flex flex-col justify-between items-center p-1 h-full rounded-xl transition-all duration-300 cursor-pointer group"
  >
    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
    >
      <img
        src={service.icon}
        alt={service.title}
        className="w-full object-contain"
      />
    </div>

    {/* Animated title with centered, spaced underline */}
    <p className="text-sm font-medium text-gray-700 text-center leading-tight relative pb-2">
      {service.title}
      <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-12 bg-gray-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
    </p>
  </div>
))}

</div>

            </div>

            <div className="flex items-center text-xl gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12  rounded-full flex items-center justify-center">
                  <CiStar className="w-8 h-8 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.6</div>
                  <div className="text-sm text-gray-600">Service Rating*</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12  rounded-full flex items-center justify-center">
                  <GoPeople className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10k+</div>
                  <div className="text-sm text-gray-600">Customers Globally*</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="hidden lg:grid grid-cols-2 gap-3"
            style={{ height: leftHeight ? `${leftHeight}px` : "auto" }}
          >
            {/* Column 1 */}
            <div className="flex flex-col gap-3 h-full">
              <div className="h-2/5 rounded-2xl overflow-hidden">
                <img
                  src="https://static.independent.co.uk/2022/04/21/21/health%20and%20beauty.jpg?width=1200&height=800&crop=1200:800"
                  alt="Beauty & Spa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow rounded-2xl overflow-hidden">
                <img
                  src="https://zhl.org.in/blog/wp-content/uploads/2024/06/Massage-Therapists.jpg"
                  alt="Massage Therapy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 h-full">
              <div className="h-1/3 rounded-2xl overflow-hidden">
                <img
                  src="https://greenbuildingscareermap.org/assets/images/Building-Automation-Systems-Technician_resized.jpg"
                  alt="Home Repair"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow rounded-2xl overflow-hidden">
                <img
                  src="https://www.shutterstock.com/image-photo/hvac-technician-performing-air-conditioner-600nw-2488702851.jpg"
                  alt="AC Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
