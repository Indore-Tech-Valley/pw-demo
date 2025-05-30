import React, { useState } from 'react';
import { CheckCircle, User, FileText, CreditCard, Star, ArrowRight, Play, Users, TrendingUp, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ServiceHeroSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const navigate = useNavigate();

  const steps = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Create Your Profile",
      description: "Set up your professional profile with your skills, experience, and portfolio",
      details: "Add your photo, write a compelling bio, list your services, and showcase your best work"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Verify Your Credentials",
      description: "Upload certificates, licenses, and get background checked for trust",
      details: "We verify your identity, qualifications, and conduct security checks to ensure quality"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Set Your Rates",
      description: "Define your pricing, availability, and service areas",
      details: "Set competitive rates, choose your working hours, and select service locations"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Start Earning",
      description: "Get matched with customers and begin building your reputation",
      details: "Receive job requests, complete services, earn reviews, and grow your business"
    }
  ];

  const benefits = [
    { icon: <Users className="w-6 h-6" />, title: "Large Customer Base", desc: "Access thousands of potential clients" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Flexible Income", desc: "Earn on your own schedule" },
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Support", desc: "Get help whenever you need it" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
<div className="relative min-h-screen overflow-hidden bg-contain bg-center" style={{ backgroundImage: "url('https://www.jkcement.com/wp-content/uploads/2023/08/team-business-people-with-engineer-professional-rear-standing-skyscraper-downtown-with-traffic-jam-bangkok-background-1024x683-jpg.webp')" }}>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/80 to-gray-900/70 z-0"></div>

  {/* Background Pattern (Animated Blobs) */}
  <div className="absolute inset-0 opacity-20 z-0">
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
    <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
    <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
    <div className="text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Become a Service Provider
      </h1>
      <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
        Join thousands of professionals earning flexible income by providing services in your area
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="text-3xl font-bold text-blue-700 mb-2">50K+</div>
          <div className="text-gray-700">Active Providers</div>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="text-3xl font-bold text-purple-700 mb-2">$2,500</div>
          <div className="text-gray-700">Average Monthly Income</div>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="text-3xl font-bold text-green-700 mb-2">4.9/5</div>
          <div className="text-gray-700">Provider Rating</div>
        </div>
      </div>

      <button 
      onClick={()=>navigate('/service-provider-registration')}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        Start Your Journey
      </button>
    </div>
  </div>
</div>


      {/* Video Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
            {!isVideoPlaying ? (
              <div className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                >
                  <Play className="w-12 h-12 text-white ml-1" />
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">See How It Works</h3>
                  <p className="text-white/80">Watch successful providers share their stories</p>
                </div>
              </div>
            ) : (
              <div className="h-96 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p>Loading video content...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple Steps to Success
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started is easy. Follow these four steps to begin your journey as a service provider
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps List */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  currentStep === index 
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg scale-105' 
                    : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
                onClick={() => setCurrentStep(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    currentStep === index 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                        currentStep === index 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        Step {index + 1}
                      </span>
                      {currentStep === index && <ArrowRight className="w-4 h-4 text-blue-500" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Step Details */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sticky top-8">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-xl inline-block mb-4">
                {steps[currentStep].icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h3>
              <p className="text-gray-600 text-lg">
                {steps[currentStep].details}
              </p>
            </div>
            
            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Progress</span>
                <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              {currentStep === steps.length - 1 ? 'Get Started Now' : 'Continue to Next Step'}
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join a platform designed to help service providers succeed and grow their business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-xl inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful service providers today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Sign Up Now
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}