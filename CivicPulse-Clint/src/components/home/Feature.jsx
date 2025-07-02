import { motion } from "framer-motion";
import { FaUserGroup } from "react-icons/fa6";
import { useTheme } from "../../contexts/useTheme";

const Feature = () => {
  const { isDark } = useTheme();

  const features = [
    {
      id: 1,
      title: "Create Events",
      description:
        "Create and manage your own community events with full details including title, description, type, location, and date.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Discover Events",
      description:
        "Browse upcoming events in a responsive grid layout. Search by name or filter by event type to find what interests you.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Join & Participate",
      description:
        "Join events with a single click and manage your participation. Get reminders and important updates about the events you join.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`py-1  max-w-11/12 mx-auto mt-15 ${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            } mb-4`}
          >
            Feature Highlights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Discover how our platform empowers communities to connect, create,
            and collaborate through meaningful events.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className={`group relative p-8 ${
                isDark ? "bg-gray-800" : "bg-white"
              } rounded-2xl shadow-lg ${
                isDark ? "shadow-emerald-900/10" : "shadow-emerald-100"
              } cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                isDark
                  ? "hover:shadow-emerald-500/20"
                  : "hover:shadow-emerald-500/25"
              } border border-transparent hover:border-emerald-500/30`}
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <motion.div
                className={`relative w-14 h-14 ${
                  isDark ? "bg-emerald-900/50" : "bg-emerald-100"
                } rounded-xl flex items-center justify-center ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                } mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                whileHover={{
                  scale: 1.2,
                  rotate: 6,
                  backgroundColor: isDark
                    ? "rgba(16, 185, 129, 0.2)"
                    : "rgba(16, 185, 129, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.icon}
                </motion.div>
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-xl bg-emerald-500/20 scale-0 group-hover:scale-100 group-hover:animate-ping opacity-75"></div>
              </motion.div>

              {/* Content */}
              <div className="relative">
                <motion.h3
                  className={`text-xl font-semibold ${
                    isDark
                      ? "text-white group-hover:text-emerald-300"
                      : "text-gray-900 group-hover:text-emerald-700"
                  } mb-3 transition-colors duration-300`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className={`${
                    isDark
                      ? "text-gray-300 group-hover:text-gray-200"
                      : "text-gray-600 group-hover:text-gray-700"
                  } transition-colors duration-300 leading-relaxed`}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.description}
                </motion.p>
              </div>

              {/* Hover Arrow Indicator */}
              <motion.div
                className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                <svg
                  className={`w-5 h-5 ${
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
