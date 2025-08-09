import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
    <div className="animate-bounce mb-4">
      <FaExclamationTriangle className="text-6xl text-emerald-500 drop-shadow-lg" />
    </div>
    <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 mb-2">
      404
    </h1>
    <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
      Oops! Page Not Found
    </p>
    <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-md text-center">
      The page you are looking for might have been removed, had its name
      changed, or is temporarily unavailable.
    </p>
    <a
      href="/"
      className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-200"
    >
      Go Home
    </a>
  </div>
);

export default NotFound;
