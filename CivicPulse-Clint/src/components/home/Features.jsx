import { use } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/useTheme";

const features = fetch("https://civic-pulse-server.vercel.app/features").then(
  (res) => res.json()
);
const Features = () => {
  const feature = use(features);
  const { isDark } = useTheme();

  return (
    <div
      className={`max-w-11/12 mx-auto py-8 mt-10 ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-white text-gray-800"
      }`}
    >
      <div className="mb-12">
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
            Featured Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-4xl mx-auto`}
          >
            Discover amazing community events happening near you. Join hands to
            make a difference. Explore opportunities to connect, volunteer, and
            create lasting memories with your community.
          </motion.p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {feature.map((event, index) => (
          <motion.div
            key={event._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
              isDark
                ? "bg-gray-800 shadow-lg shadow-gray-900/50"
                : "bg-white shadow-lg shadow-gray-200/50"
            } hover:shadow-2xl ${
              isDark
                ? "hover:shadow-emerald-500/20"
                : "hover:shadow-emerald-500/30"
            }`}
          >
            {/* Image Container with Overlay */}
            <div className="relative overflow-hidden">
              <motion.img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Floating Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-5">
              <motion.h3
                className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                  isDark
                    ? "text-white group-hover:text-emerald-400"
                    : "text-gray-800 group-hover:text-emerald-600"
                }`}
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {event.title}
              </motion.h3>
              <div className="space-y-2 mb-4">
                <motion.p
                  className={`text-sm flex items-center gap-2 transition-colors duration-300 ${
                    isDark
                      ? "text-gray-400 group-hover:text-gray-300"
                      : "text-gray-500 group-hover:text-gray-600"
                  }`}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  <strong>Location:</strong> {event.location}
                </motion.p>
                <motion.p
                  className={`text-sm flex items-center gap-2 transition-colors duration-300 ${
                    isDark
                      ? "text-gray-400 group-hover:text-gray-300"
                      : "text-gray-500 group-hover:text-gray-600"
                  }`}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  <strong>Date:</strong>{" "}
                  {new Date(event.eventDate).toLocaleDateString()}
                </motion.p>
              </div>
              <motion.button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 transform ${
                  isDark
                    ? "bg-emerald-700 hover:bg-emerald-600 text-gray-200 hover:text-white"
                    : "bg-emerald-500 hover:bg-emerald-600 text-white"
                } group-hover:shadow-lg group-hover:shadow-emerald-500/25`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: isDark
                    ? "0 10px 25px rgba(16, 185, 129, 0.3)"
                    : "0 10px 25px rgba(16, 185, 129, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => (window.location.href = `/events/${event._id}`)}
              >
                See Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
