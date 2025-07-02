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
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 overflow-hidden transition-colors duration-300">
        {/* Event Image */}
        <div className="relative h-[400px]">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-semibold transition-colors duration-300">
              {eventType}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
            {title}
          </h1>

          <div className="grid gap-4 mb-8">
            {/* Location */}
            <div className="flex items-center text-gray-600 dark:text-gray-300 transition-colors duration-300">
              <FaLocationDot className="text-emerald-600 dark:text-emerald-400 text-xl mr-3" />
              <span className="text-lg">{location}</span>
            </div>

            {/* Date */}
            <div className="flex items-center text-gray-600 dark:text-gray-300 transition-colors duration-300">
              <FaCalendarDays className="text-emerald-600 dark:text-emerald-400 text-xl mr-3" />
              <span className="text-lg">
                {format(new Date(eventDate), "MMMM d, yyyy")}
              </span>
            </div>

            {/* Organizer */}
            <div className="flex items-center text-gray-600 dark:text-gray-300 transition-colors duration-300">
              <FaUserTie className="text-emerald-600 dark:text-emerald-400 text-xl mr-3" />
              <span className="text-lg">Organized by: {creatorEmail}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Event Description
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Join Button */}
          <div className="flex justify-center">
            <button
              onClick={handleJoinEvent}
              className="w-full px-8 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-lg transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-sm dark:shadow-gray-900/50 hover:scale-102 transform"
            >
              Join Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
