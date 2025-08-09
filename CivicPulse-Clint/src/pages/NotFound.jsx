import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useTheme } from "../contexts/useTheme";

const NotFound = () => {
  const { isDark } = useTheme();
  return (
    <div
      className={
        `flex flex-col items-center justify-center min-h-screen transition-colors duration-300 ` +
        (isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-white via-emerald-50 to-blue-100")
      }
    >
      <div className="animate-bounce mb-4">
        <FaExclamationTriangle className="text-6xl text-emerald-500 drop-shadow-lg" />
      </div>
      <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 mb-2">
        404
      </h1>
      <p className={`text-2xl font-semibold mb-6 ${isDark ? "text-gray-200" : "text-gray-700"}`}>
        Oops! Page Not Found
      </p>
      <p className={`text-lg mb-8 max-w-md text-center ${isDark ? "text-gray-400" : "text-gray-500"}`}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-200"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
