import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaClipboardList,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { CiUser, CiShoppingCart, CiMedicalClipboard } from "react-icons/ci";
import UserAuthModal from "../Auth/UserAuthModal";

export default function Navbar() {
  const [locationModalOpen, setLocationModalOpen] = useState(false);
   const [userAuthModalOpen, setUserAuthModalOpen] = useState(false);
  const [location, setLocation] = useState("63, Maharani Rd - Siyaganj...");
  const [searchService, setSearchService] = useState("");

  // Typing placeholder effect
  const services = ["facial", "makeup", "hair spa", "pedicure", "bridal service"];
  const [placeholder, setPlaceholder] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = services[typingIndex % services.length];
    let typingSpeed = isDeleting ? 50 : 100;

    const type = () => {
      if (!isDeleting) {
        setPlaceholder(current.substring(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);
        if (letterIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setPlaceholder(current.substring(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);
        if (letterIndex === 0) {
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % services.length);
        }
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [letterIndex, isDeleting, typingIndex]);

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            const address = data?.display_name || "Your current location";
            setLocation(address);
            setLocationModalOpen(false);
          } catch (err) {
            alert("Failed to fetch location details.");
          }
        },
        () => {
          alert("Location permission denied.");
        }
      );
    } else {
      alert("Geolocation not supported.");
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="  w-full"><div className="max-w-7xl ">
      <nav className="w-full  h-16 lg:border-b border-gray-200 bg-white lg:fixed relative z-50">
        {/* Desktop Layout */}
        <div className="max-w-7xl mx-auto hidden md:flex items-center justify-between py-3">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
             <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-black text-white font-bold rounded-md px-2 py-1 text-sm">PW</div>
              <div className="font-semibold text-gray-800 text-lg">PW Demo</div>
            </div>
          </div>

          {/* Center: Location + Search */}
          <div className="flex items-center justify-center gap-2 flex-1 mx-8">
            <div
              className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-72 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setLocationModalOpen(true)}
            >
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              <span className="truncate">{location}</span>
              <span className="ml-auto">&#9662;</span>
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 max-w-md text-sm text-gray-700">
              <FaSearch className="mr-2 text-gray-500" />
              <input
                type="text"
                placeholder={searchService ? "" : `Search for ${placeholder} services...`}
                className="outline-none w-full"
                value={searchService}
                onChange={(e) => setSearchService(e.target.value)}
              />
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-6 text-xl text-gray-700">
            <CiMedicalClipboard className="cursor-pointer hover:text-indigo-600 text-2xl" />
            <CiShoppingCart className="cursor-pointer hover:text-indigo-600 text-2xl" />
            <CiUser 
            onClick={() => setUserAuthModalOpen(true)}
            className="cursor-pointer hover:text-indigo-600 text-2xl" />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden w-full">
          {/* Top Row */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-black text-white font-bold rounded-md px-2 py-1 text-sm">PW</div>
              <div className="font-semibold text-gray-800 text-lg">PW Demo</div>
            </div>

            <div className="flex items-center gap-4 text-xl text-gray-700">
              <FaClipboardList className="cursor-pointer hover:text-indigo-600" />
              <FaShoppingCart className="cursor-pointer hover:text-indigo-600" />
  <FaUser 
                className="cursor-pointer hover:text-indigo-600" 
                onClick={() => setUserAuthModalOpen(true)}
              />            </div>
          </div>

          {/* Location + Search */}
          <div className="px-4 pb-3 space-y-3">
            <div
              className="flex items-center border rounded-md px-3 py-2 w-full text-sm text-gray-700 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setLocationModalOpen(true)}
            >
              <FaMapMarkerAlt className="mr-2 text-gray-500 flex-shrink-0" />
              <span className="truncate flex-1 min-w-0">{location}</span>
              <span className="ml-2">&#9662;</span>
            </div>

            <div className="flex items-center border rounded-md px-3 py-2 w-full text-sm text-gray-700">
              <FaSearch className="mr-2 text-gray-500 flex-shrink-0" />
              <input
                type="text"
                placeholder={searchService ? "" : `Search for ${placeholder}...`}
                className="outline-none w-full"
                value={searchService}
                onChange={(e) => setSearchService(e.target.value)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* LOCATION MODAL */}
      {locationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
  <div className="bg-white border border-gray-200 rounded-lg shadow-lg max-w-md w-full p-6">
    <h2 className="text-2xl font-semibold text-center text-black mb-5">
      Select Your Location
    </h2>

    <div className="relative mb-5">
      <input
        type="text"
        placeholder="Search location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-4 py-3 pr-10 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={20}
        height={20}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z"
        />
      </svg>
    </div>

    <button
      onClick={handleUseCurrentLocation}
      className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 transition"
    >
      Use My Current Location
    </button>

    <div className="flex justify-end gap-4 mt-6">
      <button
        onClick={() => setLocationModalOpen(false)}
        className="text-gray-600 hover:underline"
      >
        Cancel
      </button>
      <button
        onClick={() => setLocationModalOpen(false)}
        className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition"
      >
        Save
      </button>
    </div>
  </div>
</div>

      )}
      {/* Mobile Bottom Navigation */}
<div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 flex justify-around items-center h-14 md:hidden">
  <div className="flex flex-col items-center text-xs text-gray-700">
    <FaClipboardList className="text-xl mb-1" />
    <span>Bookings</span>
  </div>
  <div className="flex flex-col items-center text-xs text-gray-700">
    <FaSearch className="text-xl mb-1" />
    <span>Search</span>
  </div>
  <div className="flex flex-col items-center text-xs  text-gray-700 relative">
    <FaShoppingCart className="text-xl mb-1" />
    <span>Cart</span>
    <div className="absolute top-0 right-2 w-2 h-2 rounded-full"></div>
  </div>
  <div className="flex flex-col items-center text-xs text-gray-700">
    <FaUser className="text-xl mb-1" />
    <span>Profile</span>
  </div>
</div>
</div></div>
         {/* USER AUTHENTICATION MODAL */}
      <UserAuthModal 
        isOpen={userAuthModalOpen} 
        onClose={() => setUserAuthModalOpen(false)} 
      />
    </>
  );
}
