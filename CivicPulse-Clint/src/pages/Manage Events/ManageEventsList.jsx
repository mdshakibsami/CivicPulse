import React, { use, useState, useEffect, useContext } from "react";
import SingleEvent from "./SingleEvent";
import { ThemeContext } from "../../contexts/theme";

const ManageEventsList = ({ manageEventsPromise }) => {
  const { isDark } = useContext(ThemeContext);
  const initialEvents = use(manageEventsPromise);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(initialEvents);
  }, [initialEvents]);

  const handleEventUpdate = (updatedEvent) => {
    setEvents((currentEvents) =>
      currentEvents.map((event) =>
        event._id === updatedEvent._id ? updatedEvent : event
      )
    );
  };

  return (
    <div
      className={`w-full px-4 py-8 mx-auto max-w-7xl min-h-screen ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Header Section */}
      <div className="mb-8">
        <h2
          className={`text-3xl font-bold text-center ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Manage Events
        </h2>
      </div>

      {/* Table Section */}
      <div
        className={`shadow-lg rounded-lg overflow-hidden ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead
              className={`${
                isDark ? "bg-emerald-800" : "bg-emerald-500"
              } text-white`}
            >
              <tr>
                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Thumbnail
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Title
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Description
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Event Type
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Date
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Location
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody
              className={`divide-y ${
                isDark ? "divide-gray-700" : "divide-gray-200"
              }`}
            >
              {events?.length > 0 ? (
                events.map((event) => (
                  <SingleEvent
                    key={event._id}
                    event={event}
                    onEventUpdate={handleEventUpdate}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className={`px-4 py-8 text-center ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    No events available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageEventsList;
