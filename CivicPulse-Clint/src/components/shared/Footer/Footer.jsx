import { Link } from "react-router";
import { useTheme } from "../../../contexts/useTheme";
import UseAuth from "../../../hooks/useAuth";

const Footer = () => {
  const { user } = UseAuth();
  const { isDark } = useTheme();

  return (
    <footer
      className={`px-3 md:px-10  ${
        isDark ? "bg-gray-900" : "bg-white"
      } border-t ${
        isDark ? "border-gray-800" : "border-gray-200"
      } transition-colors duration-300`}
    >
      <div className="py-8">
        <div className="flex flex-col md:flex-row  justify-between">
          {/* Logo and Description */}
          <div className="space-y-4 text-justify mt-5">
            <Link
              to="/"
              className={`text-xl sm:text-2xl font-bold ${
                isDark ? "text-emerald-500" : "text-emerald-600"
              }`}
            >
              Civic Pulse
            </Link>
            <p
              className={`text-sm sm:text-base ${
                isDark ? "text-gray-300" : "text-gray-600"
              } max-w-lg leading-relaxed`}
            >
              Empowering communities through events and engagement. Join us in
              making a difference.
              <br />
              Connect, volunteer, and create positive change in your local
              community. Together, we build stronger neighborhoods and lasting
              impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-5">
            <h3
              className={`font-semibold mb-4 text-base sm:text-lg ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`text-sm sm:text-base ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } hover:text-emerald-600 transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/upcoming_events"
                  className={`text-sm sm:text-base ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } hover:text-emerald-600 transition-colors`}
                >
                  Upcoming Events
                </Link>
              </li>
              {user ? (
                <li>
                  <Link
                    to="/create-event"
                    className={`text-sm sm:text-base ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    } hover:text-emerald-600 transition-colors`}
                  >
                    Create Event
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    to="/register"
                    className={`text-sm sm:text-base ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    } hover:text-emerald-600 transition-colors`}
                  >
                    Register
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-5">
            <h3
              className={`font-semibold mb-4 text-base sm:text-lg ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${
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
                <span
                  className={`text-sm sm:text-base ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } break-all`}
                >
                  support@civicpulse.com
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${
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
                <span
                  className={`text-sm sm:text-base ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  +1 (555) 123-4567
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`mt-6 sm:mt-8 pt-4 sm:pt-6 border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <p
            className={`text-center text-sm sm:text-base ${
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
