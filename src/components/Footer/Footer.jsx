  import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
import { Link } from "react-router-dom";

  export default function Footer() {
    return (
    <footer className="bg-[#f9f9f9] py-12 text-gray-800 text-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              {/* Logo */}
              <div className="mb-6 lg:mb-0">
                <div className="text-2xl font-bold tracking-wide text-indigo-900 select-none">
                  <span className="text-indigo-700">PW</span>
                  <span className="text-gray-700">Demo</span>
                </div>
              </div>

              {/* Footer Links */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
                {/* Company */}
                <div>
                  <h4 className="text-base font-semibold mb-4 text-gray-900">Company</h4>
                  <ul className="space-y-2 cursor-pointer text-gray-600">
                    <Link to={`/about`}>About us</Link>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Anti-discrimination Policy</li>
                    <li>ESG Impact</li>
                    <li>Careers</li>
                  </ul>
                </div>

                {/* For Customers */}
                <div>
                  <h4 className="text-base font-semibold mb-4 text-gray-900">For Customers</h4>
                  <ul className="space-y-2 cursor-pointer text-gray-600">
                    <li>UC Reviews</li>
                    <li>Categories Near You</li>
                    <li>Contact Us</li>
                  </ul>
                </div>

                {/* For Professionals */}
                <div>
                  <h4 className="text-base font-semibold mb-4 text-gray-900">For Professionals</h4>
                  <ul className="space-y-2 cursor-pointer text-gray-600">
                    <li>Register as a Professional</li>
                  </ul>
                </div>

                {/* Social + Apps */}
                <div>
                  <h4 className="text-base font-semibold mb-4 text-gray-900">Social Links</h4>
                  <div className="flex gap-3 mb-5">
                    {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                      <a
                        key={idx}
                        className="p-2 border rounded-full hover:bg-gray-100 transition"
                      >
                        <Icon className="text-gray-600 text-base hover:text-indigo-600" />
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648463870745-38fece.png"
                      alt="App Store"
                      className="h-10 w-32"
                    />
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696419732772-28cd3d.jpeg"
                      alt="Google Play"
                      className="h-10 w-32"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-12 pt-6 border-t border-gray-300 text-center text-xs text-gray-500">
              <p>* As on December 31, 2025</p>
              <p className="mt-2">
                © 2025 Tech Valley Mart Ltd. All rights reserved. | CIN:
                U74140DL2014PTC274413
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
