import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] px-6 py-10 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Logo */}
          <div className="mb-6 lg:mb-0">
            <img
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm cursor-pointer">
                <li>About us</li>
                <li>Terms & conditions</li>
                <li>Privacy policy</li>
                <li>Anti-discrimination policy</li>
                <li>ESG Impact</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* For Customers */}
            <div>
              <h4 className="font-semibold mb-3">For customers</h4>
              <ul className="space-y-2 text-sm cursor-pointer">
                <li>UC reviews</li>
                <li>Categories near you</li>
                <li>Contact us</li>
              </ul>
            </div>

            {/* For Professionals */}
            <div>
              <h4 className="font-semibold mb-3">For professionals</h4>
              <ul className="space-y-2 text-sm cursor-pointer">
                <li>Register as a professional</li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Social links</h4>
              <div className="flex gap-3 mb-4">
                <a className="p-2 rounded-full border hover:bg-gray-100">
                  <FaTwitter className="cursor-pointer"/>
                </a>
                <a className="p-2 rounded-full border hover:bg-gray-100">
                  <FaFacebookF  className="cursor-pointer"/>
                </a>
                <a className="p-2 rounded-full border hover:bg-gray-100">
                  <FaInstagram  className="cursor-pointer"/>
                </a>
                <a className="p-2 rounded-full border hover:bg-gray-100">
                  <FaLinkedinIn  className="cursor-pointer"/>
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <img
                  src="/apple-store.png" // Replace with real app store badge
                  alt="App Store"
                  className="h-10 w-auto"
                />
                <img
                  src="/google-play.png" // Replace with real play store badge
                  alt="Google Play"
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 border-t border-gray-300 pt-5 text-xs text-gray-500 text-center">
          <p>* As on December 31, 2025</p>
          <p className="mt-2">
            © Copyright 2025 Tech Valley Mart Ltd. All rights reserved. | CIN:
            U74140DL2014PTC274413
          </p>
        </div>
      </div>
    </footer>
  );
}
