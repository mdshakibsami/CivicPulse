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
      className={`container mx-auto px-4 py-8 min-h-screen ${
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {joinedEvents.map((event) => (
          <div
            key={event._id}
            className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            {/* Event Image */}
            <div className="relative h-48">
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    isDark
                      ? "bg-emerald-900/50 text-emerald-200"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {event.eventType}
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-6">
              <h3
                className={`text-xl font-semibold mb-2 line-clamp-1 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {event.title}
              </h3>
              {/* Location */}{" "}
              <div
                className={`flex items-center mb-2 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <FaLocationDot className="h-5 w-5 mr-2 text-emerald-500" />
                <span className="line-clamp-1">{event.location}</span>
              </div>
              {/* Date */}
              <div
                className={`flex items-center mb-2 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <FaCalendarDays className="h-5 w-5 mr-2 text-emerald-500" />
                <span>{format(new Date(event.eventDate), "PPP")}</span>
              </div>
              {/* Creator */}
              <div
                className={`flex items-center mb-4 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <FaUserTie className="h-5 w-5 mr-2 text-emerald-500" />
                <span className="line-clamp-1">By: {event.creatorEmail}</span>
              </div>
              {/* Description */}
              <p
                className={`mb-4 line-clamp-2 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {event.description}
              </p>
              {/* Status Badge */}
              <div className="flex justify-end">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    isDark
                      ? "bg-emerald-900/50 text-emerald-200"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  Joined ✓
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinEventsList;
