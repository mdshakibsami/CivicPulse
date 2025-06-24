import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/useTheme";

const Gallery = () => {
  const { isDark } = useTheme();

  const events = [
    {
      id: 1,
      title: "Community Clean-up Drive",
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1470&auto=format&fit=crop",
      category: "Environmental",
    },
    {
      id: 2,
      title: "Local Food Festival",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1470&auto=format&fit=crop",
      category: "Cultural",
    },
    {
      id: 3,
      title: "Youth Leadership Workshop",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1470&auto=format&fit=crop",
      category: "Education",
    },
    {
      id: 4,
      title: "Senior Citizens' Meet",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1470&auto=format&fit=crop",
      category: "Community",
    },
    {
      id: 5,
      title: "Local Sports Tournament",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1470&auto=format&fit=crop",
      category: "Sports",
    },
    {
      id: 6,
      title: "Arts & Crafts Exhibition",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1470&auto=format&fit=crop",
      category: "Arts",
    },
  ];

  return (
    <div
      className={`py-16 ${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            } mb-4`}
          >
            Event Highlights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Explore our vibrant community events through these captured moments.
            Each photograph tells a story of unity, purpose, and positive
            change.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg ${
                isDark ? "shadow-emerald-900/10" : "shadow-emerald-100"
              }`}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span
                    className={`inline-block px-3 py-1 ${
                      isDark ? "bg-emerald-400" : "bg-emerald-500"
                    } text-white text-sm rounded-full mb-2 transform transition-transform group-hover:scale-105`}
                  >
                    {event.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-100 transition-colors">
                    {event.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
