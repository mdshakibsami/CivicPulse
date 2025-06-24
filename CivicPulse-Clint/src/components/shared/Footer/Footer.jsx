import React from "react";
import { Link } from "react-router";
import { useTheme } from "../../../contexts/useTheme";

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`${
        isDark ? "bg-gray-900" : "bg-white"
      } border-t ${
        isDark ? "border-gray-800" : "border-gray-200"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link
              to="/"
              className={`text-2xl font-bold ${
                isDark ? "text-emerald-500" : "text-emerald-600"
              }`}
            >
              Civic Pulse
            </Link>
            <p className={isDark ? "text-gray-300" : "text-gray-600"}>
              Empowering communities through events and engagement. Join us in
              making a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } hover:text-emerald-600 transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/upcoming_events"
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } hover:text-emerald-600 transition-colors`}
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } hover:text-emerald-600 transition-colors`}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className={`font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    isDark ? "text-emerald-500" : "text-emerald-600"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                  support@civicpulse.com
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    isDark ? "text-emerald-500" : "text-emerald-600"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                  +1 (555) 123-4567
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`mt-8 pt-6 border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <p
            className={`text-center ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © {new Date().getFullYear()} Civic Pulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
