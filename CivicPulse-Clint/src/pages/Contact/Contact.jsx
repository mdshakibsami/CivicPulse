import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { useTheme } from "../../contexts/useTheme";
import Swal from "sweetalert2";

const Contact = () => {
  const { isDark } = useTheme();

  // Handler for the Send Message button
  const handleSendMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    // console.log(name, email, message);
    form.reset();
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Your email was sent successfully.",
      confirmButtonColor: "#10b981",
      background: isDark ? "#1f2937" : "#fff", // gray-800 for dark, white for light
      color: isDark ? "#fff" : "#222",
    });
  };

  return (
    <div
      className={` py-12 px-8 mx-auto transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Section 1: Contact Info */}
      <section className="mb-12">
        <h2
          className={`text-2xl font-semibold mb-8 text-center ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div
            className={`flex flex-col items-center text-center rounded-2xl p-8 shadow-xl border-4 border-transparent hover:border-gradient-to-br hover:from-emerald-400 hover:to-green-400 transition-all duration-300 group relative overflow-hidden ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <span
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0 ${
                isDark ? "from-emerald-900 to-green-900" : ""
              }`}
            ></span>
            <span className="relative z-10 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-emerald-400 to-green-400 shadow-lg">
              <FaMapMarkerAlt className="text-3xl text-white" />
            </span>
            <h3
              className={`font-bold mb-2 text-lg relative z-10 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Address
            </h3>
            <p
              className={`relative z-10 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              123 CivicPulse Ave, City, Country
            </p>
          </div>
          {/* Email Card */}
          <div
            className={`flex flex-col items-center text-center rounded-2xl p-8 shadow-xl border-4 border-transparent hover:border-gradient-to-br hover:from-blue-400 hover:to-emerald-400 transition-all duration-300 group relative overflow-hidden ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <span
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0 ${
                isDark ? "from-blue-900 to-emerald-900" : ""
              }`}
            ></span>
            <span className="relative z-10 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 shadow-lg">
              <FaEnvelope className="text-3xl text-white" />
            </span>
            <h3
              className={`font-bold mb-2 text-lg relative z-10 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Email
            </h3>
            <p
              className={`relative z-10 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              support@civicpulse.com
            </p>
          </div>
          {/* Phone Card */}
          <div
            className={`flex flex-col items-center text-center rounded-2xl p-8 shadow-xl border-4 border-transparent hover:border-gradient-to-br hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 group relative overflow-hidden ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <span
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0 ${
                isDark ? "from-yellow-900 to-orange-900" : ""
              }`}
            ></span>
            <span className="relative z-10 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 shadow-lg">
              <FaPhoneAlt className="text-3xl text-white" />
            </span>
            <h3
              className={`font-bold mb-2 text-lg relative z-10 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Phone
            </h3>
            <p
              className={`relative z-10 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              +123 456 7890
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section
        className={`mb-20 max-w-7xl mx-auto mt-20 rounded-2xl shadow-xl border-4 border-transparent hover:border-gradient-to-br hover:from-emerald-400 hover:to-blue-400 transition-all duration-300 group relative overflow-hidden ${
          isDark ? "bg-gray-800" : "bg-blue-50"
        }`}
      >
        <span
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0 ${
            isDark ? "from-emerald-900 to-blue-900" : ""
          }`}
        ></span>
        <div className="relative z-10 p-8">
          <h2
            className={`text-2xl font-semibold mb-6 text-center ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Send Us a Message
          </h2>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSendMessage}
          >
            <div className="col-span-1 flex flex-col">
              <label
                className={`mb-1 text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Name
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Enter your name"
                className={`p-3 rounded-lg border outline-none focus:ring-2 focus:ring-emerald-400 transition ${
                  isDark
                    ? "bg-gray-900 text-white border-gray-700 placeholder-gray-500"
                    : "bg-white border-gray-300 placeholder-gray-400"
                }`}
              />
            </div>
            <div className="col-span-1 flex flex-col">
              <label
                className={`mb-1 text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Email
              </label>
              <input
                name="email"
                required
                type="email"
                placeholder="Enter your email"
                className={`p-3 rounded-lg border outline-none focus:ring-2 focus:ring-emerald-400 transition ${
                  isDark
                    ? "bg-gray-900 text-white border-gray-700 placeholder-gray-500"
                    : "bg-white border-gray-300 placeholder-gray-400"
                }`}
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label
                className={`mb-1 text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Type your message..."
                rows="4"
                className={`p-3 rounded-lg border outline-none focus:ring-2 focus:ring-emerald-400 transition ${
                  isDark
                    ? "bg-gray-900 text-white border-gray-700 placeholder-gray-500"
                    : "bg-white border-gray-300 placeholder-gray-400"
                }`}
              ></textarea>
            </div>
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 rounded-lg font-semibold shadow hover:from-emerald-600 hover:to-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Section 3: Social Media / Support */}
      <section className="text-center mt-8">
        <h2
          className={`text-2xl font-semibold mb-4 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Connect With Us
        </h2>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="#"
            className="text-2xl text-blue-600 hover:text-blue-800 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-2xl text-sky-400 hover:text-sky-600 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-2xl text-pink-500 hover:text-pink-700 transition"
          >
            <FaInstagram />
          </a>
        </div>
        <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Follow us on social media or reach out for support anytime!
        </p>
      </section>
    </div>
  );
};

export default Contact;
