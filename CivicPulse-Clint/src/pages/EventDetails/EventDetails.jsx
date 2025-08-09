import React from "react";
import { useLoaderData } from "react-router";
import { format } from "date-fns";
import { FaLocationDot, FaCalendarDays, FaUserTie } from "react-icons/fa6";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/useAuth";
import { useTheme } from "../../contexts/useTheme";
import axios from "axios";

const EventDetails = () => {
  const event = useLoaderData();
  console.log(event);
  const { user } = UseAuth();
  const { isDark } = useTheme();
  const {
    _id,
    title,
    description,
    eventType,
    thumbnail,
    location,
    eventDate,
    creatorEmail,
  } = event;

  const handleJoinEvent = () => {
    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "Please login to join this event",
        icon: "info",
        confirmButtonColor: "#059669",
        background: isDark ? "#1f2937" : "#ffffff",
        color: isDark ? "#f9fafb" : "#111827",
      });
      return;
    }

    Swal.fire({
      title: "Confirm Join",
      text: `Would you like to join "${title}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#059669",
      cancelButtonColor: "#dc2626",
      confirmButtonText: "Yes, join event!",
      background: isDark ? "#1f2937" : "#ffffff",
      color: isDark ? "#f9fafb" : "#111827",
    }).then((result) => {
      if (result.isConfirmed) {
        const joinEventData = {
          eventId: _id,
          userEmail: user.email,
          joinedAt: new Date(),
        };

        axios
          .post(
            "https://civic-pulse-server.vercel.app/join-event",
            joinEventData
          )
          .then((response) => {
            if (response.data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: "You have successfully joined this event",
                confirmButtonColor: "#059669",
                background: isDark ? "#1f2937" : "#ffffff",
                color: isDark ? "#f9fafb" : "#111827",
                timer: 1500,
                showConfirmButton: false,
              });
            } else {
              Swal.fire({
                icon: "warning",
                title: "Already Joined!",
                text: "You have already joined this event",
                confirmButtonColor: "#059669",
                background: isDark ? "#1f2937" : "#ffffff",
                color: isDark ? "#f9fafb" : "#111827",
              });
            }
          })
          .catch((error) => {
            console.error("Error joining event:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to join the event. Please try again.",
              icon: "error",
              confirmButtonColor: "#059669",
              background: isDark ? "#1f2937" : "#ffffff",
              color: isDark ? "#f9fafb" : "#111827",
            });
          });
      }
    });
  };

  return (
    <>
      <div className="my-8">
        <h3
          className={`text-2xl sm:text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
            isDark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Event Details
        </h3>
      </div>
      <div
        className={`container mx-auto px-2 sm:px-7 py-0 sm:py-8    transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div
          className={`w-full rounded-lg shadow-lg overflow-hidden transition-colors duration-300 my-8 ${
            isDark ? "bg-gray-800 shadow-gray-900/20" : "bg-white"
          }`}
        >
          {/* ...no theme toggle button... */}
          <div
            className={`flex flex-col md:flex-row-reverse text-center md:text-left items-center md:items-stretch ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            {/* Event Image Right */}
            <div className="md:w-1/2 w-full relative h-56 sm:h-64 md:h-auto flex justify-center items-center">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-[300px] object-cover md:rounded-r-lg md:rounded-l-none rounded-t-lg md:rounded-t-none"
              />
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300">
                  {eventType}
                </span>
              </div>
            </div>
            {/* Event Info Left */}
            <div className="md:w-1/2 w-full p-4 sm:p-6 flex flex-col justify-between items-center md:items-start">
              <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
                <h1
                  className={`text-2xl sm:text-3xl font-bold mb-4 transition-colors duration-300 w-full text-center md:text-left ${
                    isDark ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {title}
                </h1>
                <div className="grid gap-3 sm:gap-4 mb-4 w-full">
                  {/* Location */}
                  <div
                    className={`flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start transition-colors duration-300 text-base sm:text-lg text-center md:text-left ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span className="flex items-center justify-center mb-1 sm:mb-0 sm:mr-3">
                      <FaLocationDot
                        className={`text-lg sm:text-xl mr-2 sm:mr-0 ${
                          isDark ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      />
                    </span>
                    <span>{location}</span>
                  </div>
                  {/* Date */}
                  <div
                    className={`flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start transition-colors duration-300 text-base sm:text-lg text-center md:text-left ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span className="flex items-center justify-center mb-1 sm:mb-0 sm:mr-3">
                      <FaCalendarDays
                        className={`text-lg sm:text-xl mr-2 sm:mr-0 ${
                          isDark ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      />
                    </span>
                    <span>{format(new Date(eventDate), "MMMM d, yyyy")}</span>
                  </div>
                  {/* Organizer */}
                  <div
                    className={`flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start transition-colors duration-300 text-base sm:text-lg text-center md:text-left ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span className="flex items-center justify-center mb-1 sm:mb-0 sm:mr-3">
                      <FaUserTie
                        className={`text-lg sm:text-xl mr-2 sm:mr-0 ${
                          isDark ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      />
                    </span>
                    <span>Organized by: {creatorEmail}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Description below */}
          <div
            className={`p-4 sm:p-6 border-t transition-colors duration-300 ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <h2
              className={`text-xl sm:text-2xl font-semibold mb-4 transition-colors duration-300 ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Event Description
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 mb-8 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {description}
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleJoinEvent}
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-sm hover:scale-102 transform ${
                  isDark
                    ? "bg-emerald-700 hover:bg-emerald-600 text-white dark:shadow-gray-900/50"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                }`}
              >
                Join Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
