import React from "react";
import { Link } from "react-router";
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
    {
      id: 4,
      title: "Connect Communities",
      description:
        "Build stronger communities by connecting with like-minded people through our events platform.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`py-16 ${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            } mb-4`}
          >
            Feature Highlights
          </h2>
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Discover how our platform empowers communities to connect, create, and
            collaborate through meaningful events.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`p-6 ${
                isDark ? "bg-gray-800" : "bg-white"
              } rounded-2xl shadow-lg ${
                isDark ? "shadow-emerald-900/10" : "shadow-emerald-100"
              } transform hover:-translate-y-1 transition-all duration-300`}
            >
              <div
                className={`w-12 h-12 ${
                  isDark ? "bg-emerald-900/50" : "bg-emerald-100"
                } rounded-xl flex items-center justify-center ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                } mb-4`}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-xl font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                } mb-2`}
              >
                {feature.title}
              </h3>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
