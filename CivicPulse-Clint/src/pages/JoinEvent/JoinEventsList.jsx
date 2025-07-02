import React, { use, useContext } from "react";
import { format } from "date-fns";
import { FaLocationDot, FaCalendarDays, FaUserTie } from "react-icons/fa6";
import { ThemeContext } from "../../contexts/theme";

const JoinEventsList = ({ joinedEventsPromise }) => {
  const { isDark } = useContext(ThemeContext);
  const data = use(joinedEventsPromise);
  const joinedEvents = data || [];

  if (!joinedEvents.length) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div
          className={`text-center p-8 rounded-lg shadow-lg ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-2 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            No Events Joined Yet
          </h2>
          <p className={isDark ? "text-gray-300" : "text-gray-600"}>
            You haven't joined any events yet. Explore upcoming events to join!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={` max-w-11/12 container mx-auto px-4 py-8 min-h-screen ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <h2
        className={`text-3xl font-bold mb-8 text-center ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Your Joined Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {joinedEvents.map((event) => (
          <div
            key={event._id}
            className={`group rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer ${
              isDark
                ? "bg-gray-800 hover:bg-gray-750"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            {/* Event Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="absolute top-4 right-4 transform transition-all duration-300 group-hover:scale-110">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    isDark
                      ? "bg-emerald-900/50 text-emerald-200 group-hover:bg-emerald-800/70"
                      : "bg-emerald-100 text-emerald-800 group-hover:bg-emerald-200"
                  }`}
                >
                  {event.eventType}
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-6 transition-all duration-300 group-hover:p-7">
              <h3
                className={`text-xl font-semibold mb-2 line-clamp-1 transition-all duration-300 group-hover:text-emerald-600 ${
                  isDark
                    ? "text-white group-hover:text-emerald-400"
                    : "text-gray-900"
                }`}
              >
                {event.title}
              </h3>
              {/* Location */}{" "}
              <div
                className={`flex items-center mb-2 transition-all duration-300 group-hover:translate-x-1 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <FaLocationDot className="h-5 w-5 mr-2 text-emerald-500 transition-all duration-300 group-hover:text-emerald-400 group-hover:scale-110" />
                <span className="line-clamp-1">{event.location}</span>
              </div>
              {/* Date */}
              <div
                className={`flex items-center mb-2 transition-all duration-300 group-hover:translate-x-1 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <FaCalendarDays className="h-5 w-5 mr-2 text-emerald-500 transition-all duration-300 group-hover:text-emerald-400 group-hover:scale-110" />
                <span>{format(new Date(event.eventDate), "PPP")}</span>
              </div>
              {/* Creator */}
              <div
                className={`flex items-center mb-4 transition-all duration-300 group-hover:translate-x-1 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <FaUserTie className="h-5 w-5 mr-2 text-emerald-500 transition-all duration-300 group-hover:text-emerald-400 group-hover:scale-110" />
                <span className="line-clamp-1">By: {event.creatorEmail}</span>
              </div>
              {/* Description */}
              <p
                className={`mb-4 text-sm leading-relaxed line-clamp-3 transition-all duration-300 ${
                  isDark
                    ? "text-gray-300 group-hover:text-gray-200"
                    : "text-gray-600 group-hover:text-gray-700"
                }`}
              >
                {event.description}
              </p>
              {/* Actions */}
              <div className="flex items-center justify-between transition-all duration-300 group-hover:transform group-hover:translate-y-1">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg ${
                    isDark
                      ? "bg-emerald-900/50 text-emerald-200 group-hover:bg-emerald-800/70 group-hover:text-emerald-100"
                      : "bg-emerald-100 text-emerald-800 group-hover:bg-emerald-200 group-hover:text-emerald-900"
                  }`}
                >
                  Joined ✓
                </span>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-110 hover:shadow-lg group-hover:animate-pulse ${
                    isDark
                      ? "bg-emerald-700 hover:bg-emerald-600 text-white hover:shadow-emerald-500/25"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-emerald-500/25"
                  }`}
                  onClick={() => {
                    window.location.href = `/events/${event._id}`;
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinEventsList;
