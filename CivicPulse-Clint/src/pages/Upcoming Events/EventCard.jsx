import { Link } from "react-router";
import { format } from "date-fns";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

const EventCard = ({ event }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div>
      {" "}
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
            {" "}
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
          {" "}
          <h3
            className={`text-xl font-semibold mb-2 line-clamp-1 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {event.title}
          </h3>
          {/* Location */}
          <div
            className={`flex items-center mb-2 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="line-clamp-1">{event.location}</span>
          </div>
          {/* Date */}
          <div
            className={`flex items-center mb-4 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{format(new Date(event.eventDate), "PPP")}</span>
          </div>
          {/* View Event Button */}
          <Link
            to={`/events/${event._id}`}
            className="block w-full text-center bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-200"
          >
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
