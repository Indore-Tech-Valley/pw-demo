import React from "react";
import { Star, Users } from "lucide-react";

const Banner = () => {
  const services = [
    {
      title: "Women's Salon & Spa",
      icon: "👩‍💼",
      bgColor: "bg-pink-100",
    },
    {
      title: "Men's Salon & Massage",
      icon: "👨‍💼",
      bgColor: "bg-blue-100",
    },
    {
      title: "AC & Appliance Repair",
      icon: "❄️",
      bgColor: "bg-green-100",
    },
    {
      title: "Cleaning",
      icon: "🧹",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Electrician, Plumber & Carpenter",
      icon: "🔧",
      bgColor: "bg-orange-100",
    },
    {
      title: "Native Water Purifier",
      icon: "💧",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:px-12">
      <div className="w-full mx-aut">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section - Services */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl px-4 font-bold text-gray-900 leading-tight">
                Home services at your{" "}
                <span className="block">doorstep</span>
              </h1>
            </div>

            {/* Services Grid */}
            <div className="rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">
                What are you looking for?
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 rounded-xl  transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700 text-center leading-tight">
                      {service.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center text-xl gap-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
                  <Star className="w-6 h-6 text-yellow-600 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.8</div>
                  <div className="text-sm text-gray-600">Service Rating*</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">12M+</div>
                  <div className="text-sm text-gray-600">Customers Globally*</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Images */}
          <div className="relative md:block hidden lg:flex flex-col gap-4">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-96 md:h-[500px]">
              {/* Top Left - Salon Service */}
              <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-pink-400 opacity-20"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">💄</span>
                    </div>
                    <p className="text-sm font-medium">Beauty & Spa</p>
                  </div>
                </div>
              </div>

              {/* Top Right - Massage */}
              <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-amber-400 opacity-20"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">💆‍♂️</span>
                    </div>
                    <p className="text-sm font-medium">Massage Therapy</p>
                  </div>
                </div>
              </div>

              {/* Bottom Left - Home Repair */}
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-400 opacity-20"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <p className="text-sm font-medium">Home Repair</p>
                  </div>
                </div>
              </div>

              {/* Bottom Right - AC Service */}
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-green-400 opacity-20"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">❄️</span>
                    </div>
                    <p className="text-sm font-medium">AC Service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 left-1/3 w-10 h-10 bg-blue-400 rounded-full animate-bounce delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;