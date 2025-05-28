import { useState } from "react";
import { 
  FaUsers, 
  FaAward, 
  FaClock, 
  FaShieldAlt, 
  FaHandshake, 
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPlay
} from "react-icons/fa";

export default function AboutUs() {
  const [playVideo, setPlayVideo] = useState(false);

  const stats = [
    { icon: FaUsers, number: "50K+", label: "Happy Customers" },
    { icon: FaHandshake, number: "2K+", label: "Service Partners" },
    { icon: FaAward, number: "15+", label: "Service Categories" },
    { icon: FaClock, number: "24/7", label: "Customer Support" }
  ];

  const values = [
    {
      icon: FaShieldAlt,
      title: "Trust & Safety",
      description: "All our service professionals are background-verified and trained to ensure your safety and satisfaction."
    },
    {
      icon: FaStar,
      title: "Quality Assured",
      description: "We maintain the highest standards of service quality with regular training and customer feedback monitoring."
    },
    {
      icon: FaClock,
      title: "Convenient Scheduling",
      description: "Book services at your preferred time with flexible scheduling options that fit your busy lifestyle."
    },
    {
      icon: FaHandshake,
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden charges. Get the best value for premium home services."
    }
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "10+ years in service industry"
    },
    {
      name: "Rahul Kumar",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in logistics & quality"
    },
    {
      name: "Sneha Patel",
      role: "Customer Experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Ensures customer satisfaction"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400 rounded-full opacity-10 animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">PW Demo</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-indigo-100 leading-relaxed">
                Revolutionizing home services with trusted professionals, 
                seamless booking, and unmatched customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg">
                  Our Services
                </button>
                <button 
                  onClick={() => setPlayVideo(true)}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition-all flex items-center gap-2"
                >
                  <FaPlay className="w-4 h-4" />
                  Watch Story
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-8 h-8 mx-auto mb-3 text-pink-900" />
                      <div className="text-3xl text-gray-800 font-bold mb-1">{stat.number}</div>
                      <div className="text-gray-500 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To make professional home services accessible, reliable, and affordable for every household in India. 
                We believe that everyone deserves quality service without the hassle of finding trusted professionals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through technology and a network of skilled professionals, we're building a platform that connects 
                homeowners with verified service providers for everything from beauty treatments to home repairs.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">2019</div>
                <div className="text-indigo-200">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PW Demo?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional service experiences that exceed your expectations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate individuals behind PW Demo's success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-indigo-500 group-hover:border-pink-500 transition-colors"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-20 rounded-full transition-opacity"></div> */}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-indigo-300 font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section className="py-20 bg-gray-100 text-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Info Section */}
      <div>
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-8">
          Have questions or want to partner with us? We'd love to hear from you.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="w-6 h-6 text-indigo-600" />
            <span className="text-base text-gray-700">Indore, Madhya Pradesh, India</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="w-6 h-6 text-indigo-600" />
            <span className="text-base text-gray-700">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="w-6 h-6 text-indigo-600" />
            <span className="text-base text-gray-700">hello@pwdemo.com</span>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* Video Modal */}
      {playVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative max-w-4xl w-full mx-4">
            <button 
              onClick={() => setPlayVideo(false)}
              className="absolute -top-12 right-0 text-white text-xl hover:text-gray-300"
            >
              ✕ Close
            </button>
            <div className="bg-black rounded-lg overflow-hidden aspect-video">
              <div className="flex items-center justify-center h-full text-white">
                <div className="text-center">
                  <FaPlay className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-xl">Video placeholder - Add your company video here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}