
import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaClipboardList,
  FaShoppingCart,
  FaUser,
  FaTimes,
  FaPhone,
} from "react-icons/fa";
import { CiUser, CiShoppingCart, CiMedicalClipboard } from "react-icons/ci";

// User Authentication Modal Component
function UserAuthModal({ isOpen, onClose }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  if (!isOpen) return null;

  const handleContinue = () => {
    if (phoneNumber.trim()) {
      // Handle phone number verification logic here
      console.log("Phone number:", countryCode + phoneNumber);
      // You can add your verification logic here
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Phone Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <FaPhone className="w-6 h-6 text-gray-600" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Enter your phone number
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-center mb-8">
          We'll send you a text with a verification code.
        </p>

        {/* Phone Input */}
        <div className="mb-6">
          <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
            {/* Country Code Dropdown */}
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="px-3 py-3 bg-gray-50 border-r border-gray-300 text-gray-700 focus:outline-none focus:bg-white"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+86">+86</option>
            </select>

            {/* Phone Number Input */}
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
              maxLength="10"
            />
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          disabled={!phoneNumber.trim()}
          className={`w-full py-3 rounded-lg font-semibold transition-all ${
            phoneNumber.trim()
              ? "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Continue
        </button>

        {/* Terms and Privacy */}
        <p className="text-xs text-gray-500 text-center mt-6">
          By continuing, you agree to our{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            T&C
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default UserAuthModal;