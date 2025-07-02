import { useState, useContext } from "react";
import { useLoaderData } from "react-router";
import EventCard from "./EventCard";
import { ThemeContext } from "../../contexts/theme";
import { FaSearch, FaFilter } from "react-icons/fa";
import axios from "axios";

const UpcomingEvents = () => {
  const data = useLoaderData();
  const [events, setEvents] = useState(data.events);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const { isDark } = useContext(ThemeContext);

  const eventTypes = [
    "Cleanup",
    "Plantation",
    "Donation",
    "Food Drive",
    "Education",
    "Healthcare",
    "Others",
  ];

  const handleSearch = async () => {
    try {
      const query = new URLSearchParams();
      if (searchTerm) query.append("search", searchTerm);
      if (selectedType) query.append("type", selectedType);

      const res = await axios.get(
        `https://civic-pulse-server.vercel.app/upcoming?${query.toString()}`
      );
      if (res.data.success) {
        setEvents(res.data.events);
      } else {
        console.error("Error in API response:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching filtered events:", error);
      setEvents([]); // Clear events on error
    }
  };

  const resetFilters = async () => {
    setSearchTerm("");
    setSelectedType("");
    try {
      const res = await axios.get(
        "https://civic-pulse-server.vercel.app/upcoming"
      );
      if (res.data.success) {
        setEvents(res.data.events);
      }
    } catch (error) {
      console.error("Error resetting filters:", error);
    }
  };

  // Event handlers for real-time search
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (!e.target.value && !selectedType) {
      resetFilters();
    }
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    const newType = e.target.value;
    if (!newType && !searchTerm) {
      resetFilters();
    } else {
      setTimeout(handleSearch, 0);
    }
  };

  return (
    <div
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 text-center ${
            isDark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Upcoming Events
        </h2>

        {/* Search and Filter Section */}
        <div className="mb-8 max-w-4xl mx-auto">
          {/* Search Box with Button */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <label
                  htmlFor="search"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <FaSearch className="inline mr-2" />
                  Search Events
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by title or location"
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    } focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200`}
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-200 flex items-center"
                  >
                    <FaSearch className="mr-2" />
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Filter Section */}
            <div className="flex-1 md:max-w-xs">
              <label
                htmlFor="eventType"
                className={`block text-sm font-medium mb-2 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <FaFilter className="inline mr-2" />
                Filter by Type
              </label>
              <div className="relative">
                <select
                  id="eventType"
                  value={selectedType}
                  onChange={handleTypeChange}
                  className={`w-full px-4 py-3 rounded-lg appearance-none ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-white border-gray-300 text-gray-900"
                  } focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 shadow-sm`}
                >
                  <option value="">All Event Types</option>
                  {eventTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className={isDark ? "bg-gray-700" : "bg-white"}
                    >
                      {type}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Reset Button */}
          {/* {(searchTerm || selectedType) && (
            <div className="mt-4 text-center">
              <button
                // onClick={handleReset}
                className={`inline-flex items-center px-4 py-2 rounded-md text-sm transition-colors duration-200 ${
                  isDark
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Clear Filters
              </button>
            </div>
          )} */}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((event) => <EventCard key={event._id} event={event} />)
          ) : (
            <div
              className={`col-span-full text-center py-8 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              No events found matching your criteria
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
