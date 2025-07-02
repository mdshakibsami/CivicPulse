import { motion } from "framer-motion";
import pic1 from "../../assets/home/pic-1.jpg";
import pic2 from "../../assets/home/pic-2.jpg";
import { Link, useNavigate } from "react-router";
import { useTheme } from "../../contexts/useTheme";
import UseAuth from "../../hooks/useAuth";

const Banner = () => {
  const navigate = useNavigate();
  const { user } = UseAuth();
  const { isDark } = useTheme();

  return (
    <div
      className={`relative lg:h-[450px] px-3 md:px-10 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-emerald-50 to-white"
      } overflow-hidden`}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-5"></div>
      </div>

      <div className="py-8 sm:py-12 relative h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 w-full">
          {/* Text Content */}
          <motion.div
            className="flex-1 space-y-3 sm:space-y-4 text-center lg:text-left px-2 sm:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${
                isDark ? "text-white" : "text-gray-800"
              } leading-tight`}
            >
              Empowering Communities,{" "}
              <span className="text-emerald-500">One Event at a Time.</span>
            </h1>
            <p
              className={`text-sm sm:text-base lg:text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              } max-w-2xl mx-auto lg:mx-0`}
            >
              Join hands with your community to make a real difference. Discover
              local events, volunteer for causes that matter, and be a part of
              positive change—right where you live.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              {user ? (
                <>
                  {" "}
                  <motion.button
                    onClick={() => navigate("/upcoming-events")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 sm:px-8 py-2 sm:py-3 border-2 border-emerald-500 text-emerald-500 rounded-lg font-semibold text-sm sm:text-base ${
                      isDark ? "hover:bg-emerald-900/30" : "hover:bg-emerald-50"
                    } transition-colors duration-300`}
                  >
                    Join a Event
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.button
                    onClick={() => navigate("/register")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 sm:px-8 py-2 sm:py-3 border-2 border-emerald-500 text-emerald-500 rounded-lg font-semibold text-sm sm:text-base ${
                      isDark ? "hover:bg-emerald-900/30" : "hover:bg-emerald-50"
                    } transition-colors duration-300`}
                  >
                    Register
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>

          {/* Images */}
          <div className="flex-1 relative mt-2.5 lg:mt-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none mx-auto lg:mx-0 pt-4 sm:pt-2 lg:pt-0 hidden sm:block">
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
                className={`w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 ${
                  isDark ? "border-emerald-900/30" : "border-emerald-100"
                }`}
              />
            </motion.div>

            <motion.div
              className="absolute top-16 lg:top-24 -right-2 sm:-right-4 z-0"
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
                className={`w-full max-w-xs lg:max-w-sm rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 ${
                  isDark ? "border-emerald-900/30" : "border-emerald-100"
                }`}
              />
            </motion.div>

            {/* Decorative Elements */}
            <div
              className={`absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 ${
                isDark ? "bg-emerald-900/30" : "bg-emerald-100"
              } rounded-full opacity-50 blur-xl`}
            ></div>
            <div
              className={`absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-20 h-20 sm:w-32 sm:h-32 ${
                isDark ? "bg-emerald-900/20" : "bg-emerald-50"
              } rounded-full opacity-50 blur-xl`}
            ></div>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div
        className={`absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 ${
          isDark ? "bg-emerald-900/30" : "bg-emerald-100"
        } rounded-full mix-blend-multiply filter blur-xl opacity-30`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 ${
          isDark ? "bg-emerald-900/20" : "bg-emerald-200"
        } rounded-full mix-blend-multiply filter blur-xl opacity-30`}
      ></div>
    </div>
  );
};

export default Banner;
