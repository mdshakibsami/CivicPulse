import { motion } from "framer-motion";
import { useTheme } from "../../contexts/useTheme";
import { useNavigate } from "react-router";

const Gallery = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const colorMap = {
    emerald: {
      bg: "bg-gradient-to-br from-emerald-500/80 to-emerald-600/90",
      text: "text-emerald-500 group-hover:text-white",
    },
    green: {
      bg: "bg-gradient-to-br from-green-500/80 to-green-600/90",
      text: "text-green-500 group-hover:text-white",
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-500/80 to-blue-600/90",
      text: "text-blue-500 group-hover:text-white",
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-500/80 to-orange-600/90",
      text: "text-orange-500 group-hover:text-white",
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-500/80 to-purple-600/90",
      text: "text-purple-500 group-hover:text-white",
    },
    red: {
      bg: "bg-gradient-to-br from-red-500/80 to-red-600/90",
      text: "text-red-500 group-hover:text-white",
    },
  };

  const categories = [
    {
      id: 1,
      title: "Cleanup",
      description: "Environmental cleanup initiatives",
      color: "emerald",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Plantation",
      description: "Tree planting & green initiatives",
      color: "green",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15.75v5.25m0-18v2.25"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Donation",
      description: "Charitable giving & fundraising",
      color: "blue",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Food Drive",
      description: "Community food assistance",
      color: "orange",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Education",
      description: "Learning & skill development",
      color: "purple",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Healthcare",
      description: "Medical support & wellness",
      color: "red",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5.25v6m3-3H9"
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            } mb-3 sm:mb-4 lg:mb-6`}
          >
            Explore Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-sm sm:text-base lg:text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto px-4`}
          >
            Discover various event categories that bring our community together.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
                  : "bg-gradient-to-br from-white to-gray-50 border border-gray-200"
              }`}
            >
              {/* Colored Background Overlay on Hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  colorMap[category.color].bg
                }`}
              ></div>

              <div className="relative p-4 sm:p-5 lg:p-6 z-10">
                {/* Icon Container */}
                <div
                  className={`mb-3 sm:mb-4 transition-all duration-500 group-hover:scale-110 ${
                    colorMap[category.color].text
                  }`}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto">
                    {category.icon()}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 transition-colors duration-500 ${
                      isDark
                        ? "text-white group-hover:text-white"
                        : "text-gray-800 group-hover:text-white"
                    }`}
                  >
                    {category.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm lg:text-base transition-colors duration-500 ${
                      isDark
                        ? "text-gray-400 group-hover:text-gray-100"
                        : "text-gray-600 group-hover:text-gray-100"
                    }`}
                  >
                    {category.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Events Button */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/upcoming-events")}
            className={`px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl ${
              isDark
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border border-emerald-500/30"
                : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
            }`}
          >
            <span className="flex items-center justify-center gap-2 sm:gap-3">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              All Events
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
