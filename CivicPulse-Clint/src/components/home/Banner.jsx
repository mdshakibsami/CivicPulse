import React from "react";
import { motion } from "framer-motion";
import pic1 from "../../assets/home/pic-1.jpg";
import pic2 from "../../assets/home/pic-2.jpg";
import { Link, useNavigate } from "react-router";
import { useTheme } from "../../contexts/useTheme";

const Banner = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <div
      className={`relative min-h-screen px-5 mx-auto ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-emerald-50 to-white"
      } overflow-hidden`}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className={`text-4xl lg:text-5xl xl:text-6xl font-bold ${
                isDark ? "text-white" : "text-gray-800"
              } leading-tight`}
            >
              Empowering Communities,{" "}
              <span className="text-emerald-500">One Event at a Time.</span>
            </h1>
            <p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              } max-w-2xl`}
            >
              Join hands with your community to make a real difference. Discover
              local events, volunteer for causes that matter, and be a part of
              positive change—right where you live.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={() => navigate("/register")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 border-2 border-emerald-500 text-emerald-500 rounded-lg font-semibold ${
                  isDark
                    ? "hover:bg-emerald-900/30"
                    : "hover:bg-emerald-50"
                } transition-colors duration-300`}
              >
                Register
              </motion.button>
            </div>
          </motion.div>

          {/* Images */}
          <div className="flex-1 relative">
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={pic1}
                alt="Community Event"
                className={`w-full max-w-md rounded-2xl shadow-2xl border-4 ${
                  isDark
                    ? "border-emerald-900/30"
                    : "border-emerald-100"
                }`}
              />
            </motion.div>

            <motion.div
              className="absolute top-32 -right-4 z-0"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.img
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={pic2}
                alt="Community Gathering"
                className={`w-full max-w-sm rounded-2xl shadow-2xl border-4 ${
                  isDark
                    ? "border-emerald-900/30"
                    : "border-emerald-100"
                }`}
              />
            </motion.div>

            {/* Decorative Elements */}
            <div
              className={`absolute -top-4 -left-4 w-24 h-24 ${
                isDark
                  ? "bg-emerald-900/30"
                  : "bg-emerald-100"
              } rounded-full opacity-50 blur-xl`}
            ></div>
            <div
              className={`absolute -bottom-8 -right-8 w-32 h-32 ${
                isDark
                  ? "bg-emerald-900/20"
                  : "bg-emerald-50"
              } rounded-full opacity-50 blur-xl`}
            ></div>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div
        className={`absolute top-0 left-0 w-32 h-32 ${
          isDark
            ? "bg-emerald-900/30"
            : "bg-emerald-100"
        } rounded-full mix-blend-multiply filter blur-xl opacity-30`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-32 h-32 ${
          isDark
            ? "bg-emerald-900/20"
            : "bg-emerald-200"
        } rounded-full mix-blend-multiply filter blur-xl opacity-30`}
      ></div>
    </div>
  );
};

export default Banner;
