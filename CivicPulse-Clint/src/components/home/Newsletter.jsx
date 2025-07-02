import { useTheme } from "../../contexts/useTheme";
import React from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
  const { isDark } = useTheme();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    Swal.fire({
      title: "Thank you for subscribing!",
      text: "We will keep you updated with the latest community events and opportunities.",
      icon: "success",
      confirmButtonColor: "#059669",
      background: isDark ? "#1f2937" : "#ffffff",
      color: isDark ? "#f9fafb" : "#111827",
      timer: 3000,
      showConfirmButton: true,
    });

    // Reset form
    e.target.reset();
  };

  return (
    <div
      className={`py-16 ${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto ${
            isDark ? "bg-gray-800" : "bg-white"
          } rounded-2xl shadow-xl ${
            isDark ? "shadow-emerald-900/10" : "shadow-emerald-100"
          } overflow-hidden`}
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Section with Image */}
            <div className="md:w-1/2 relative min-h-[400px]">
              <div className="absolute inset-0 bg-emerald-600">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557568192-2fafc8b5bdc9?q=80&w=1470&auto=format&fit=crop')] opacity-50 mix-blend-multiply"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    isDark
                      ? "from-emerald-700/90 to-emerald-900/90"
                      : "from-emerald-600/90 to-emerald-800/90"
                  }`}
                ></div>
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
                    <p className="text-emerald-50">
                      Get updates about community events and opportunities to
                      make a difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section with Form */}
            <div
              className={`md:w-1/2 p-8 md:p-12 ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="space-y-6">
                <div>
                  <h2
                    className={`text-3xl font-bold ${
                      isDark ? "text-white" : "text-gray-800"
                    } mb-2`}
                  >
                    Newsletter Signup
                  </h2>
                  <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                    Join our mailing list to stay updated on new events.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      } mb-1`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={`w-full px-4 py-2 rounded-lg border ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white focus:ring-emerald-400 hover:border-gray-500"
                          : "bg-white border-gray-300 text-gray-900 focus:ring-emerald-500 hover:border-gray-400"
                      } focus:ring-2 focus:border-transparent transition-all duration-200 hover:shadow-md`}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      } mb-1`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={`w-full px-4 py-2 rounded-lg border ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white focus:ring-emerald-400 hover:border-gray-500"
                          : "bg-white border-gray-300 text-gray-900 focus:ring-emerald-500 hover:border-gray-400"
                      } focus:ring-2 focus:border-transparent transition-all duration-200 hover:shadow-md`}
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className={`w-full ${
                      isDark
                        ? "bg-emerald-500 hover:bg-emerald-600"
                        : "bg-emerald-600 hover:bg-emerald-700"
                    } text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95`}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
