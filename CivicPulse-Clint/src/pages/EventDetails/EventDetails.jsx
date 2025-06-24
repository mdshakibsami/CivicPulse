import React from "react";
import { useLoaderData } from "react-router";
import { format } from "date-fns";
import { FaLocationDot, FaCalendarDays, FaUserTie } from "react-icons/fa6";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/useAuth";
import axios from "axios";

const EventDetails = () => {
  const event = useLoaderData();
  console.log(event);
  const { user } = UseAuth();
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
    }).then((result) => {
      if (result.isConfirmed) {
        const joinEventData = {
          eventId: _id,
          userEmail: user.email,
          joinedAt: new Date(),
        };

        axios
          .post("https://civic-pulse-server.vercel.app/join-event", joinEventData)
          .then((response) => {
            if (response.data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: "You have successfully joined this event",
                confirmButtonColor: "#059669",
                background: "#ffffff",
                timer: 1500,
                showConfirmButton: false,
              });
            } else {
              Swal.fire({
                icon: "warning",
                title: "Already Joined!",
                text: "You have already joined this event",
                confirmButtonColor: "#059669",
                background: "#ffffff",
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
              background: "#ffffff",
            });
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Event Image */}
        <div className="relative h-[400px]">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
              {eventType}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>

          <div className="grid gap-4 mb-8">
            {/* Location */}
            <div className="flex items-center text-gray-600">
              <FaLocationDot className="text-emerald-600 text-xl mr-3" />
              <span className="text-lg">{location}</span>
            </div>

            {/* Date */}
            <div className="flex items-center text-gray-600">
              <FaCalendarDays className="text-emerald-600 text-xl mr-3" />
              <span className="text-lg">
                {format(new Date(eventDate), "MMMM d, yyyy")}
              </span>
            </div>

            {/* Organizer */}
            <div className="flex items-center text-gray-600">
              <FaUserTie className="text-emerald-600 text-xl mr-3" />
              <span className="text-lg">Organized by: {creatorEmail}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Event Description
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Join Button */}
          <div className="flex justify-center">
            <button
              onClick={handleJoinEvent}
              className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
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
