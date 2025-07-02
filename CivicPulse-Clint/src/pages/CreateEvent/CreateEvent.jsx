import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { ThemeContext } from "../../contexts/theme";
import { useNavigate } from "react-router";

const CreateEvent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user } = UseAuth();
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();
  const eventTypes = [
    "Cleanup",
    "Plantation",
    "Donation",
    "Food Drive",
    "Education",
    "Healthcare",
    "Others",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const eventData = {
      title: form.title.value,
      description: form.description.value,
      eventType: form.eventType.value,
      thumbnail: form.thumbnailUrl.value,
      location: form.location.value,
      eventDate: selectedDate,
      creatorEmail: user?.email,
    };
    console.log(eventData);
    axios
      .post("https://civic-pulse-server.vercel.app/add-event", eventData)
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Event Created!",
            text: "Your event has been created successfully",
            confirmButtonColor: "#059669",
            background: isDark ? "#1F2937" : "#ffffff",
            color: isDark ? "#F3F4F6" : "#000000",
          }).then(() => {
            form.reset();
            setSelectedDate(new Date());
            navigate("/upcoming-events");
          });
        }
      })
      .catch((error) => {
        console.error("Error creating event:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to create the event. Please try again.",
          icon: "error",
          confirmButtonColor: "#059669",
          background: isDark ? "#1F2937" : "#ffffff",
          color: isDark ? "#F3F4F6" : "#000000",
        });
      });
  };

  return (
    <div
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <div
          className={`p-8 rounded-lg shadow-lg ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-3xl font-bold text-center mb-8 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Create New Event
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}{" "}
            <fieldset
              className={`border rounded-lg p-4 ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <legend
                className={`text-lg font-medium px-2 ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                Basic Information
              </legend>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className={`block text-sm font-medium ${
                      isDark ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Event Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-white placeholder-white/70"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Enter event title"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className={`block text-sm font-medium ${
                      isDark ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    required
                    rows={4}
                    className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-white placeholder-white/70"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Describe your event"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eventType"
                    className={`block text-sm font-medium ${
                      isDark ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    id="eventType"
                    required
                    className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  >
                    {" "}
                    <option
                      value=""
                      className={isDark ? "bg-gray-700" : "bg-white"}
                    >
                      Select event type
                    </option>
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
                </div>
              </div>
            </fieldset>
            {/* Media */}{" "}
            <fieldset
              className={`border rounded-lg p-4 ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <legend
                className={`text-lg font-medium px-2 ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                Event Media
              </legend>
              <div>
                <label
                  htmlFor="thumbnailUrl"
                  className={`block text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Thumbnail Image URL
                </label>
                <input
                  type="url"
                  name="thumbnailUrl"
                  id="thumbnailUrl"
                  required
                  className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Enter image URL"
                />
              </div>
            </fieldset>
            {/* Location and Date */}{" "}
            <fieldset
              className={`border rounded-lg p-4 ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <legend
                className={`text-lg font-medium px-2 ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                Location & Date
              </legend>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="location"
                    className={`block text-sm font-medium ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    required
                    className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Enter event location"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eventDate"
                    className={`block text-sm font-medium ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Event Date
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                    className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-gray-100"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                </div>
              </div>
            </fieldset>{" "}
            {/* Creator Information */}{" "}
            <fieldset
              className={`border rounded-lg p-4 ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <legend
                className={`text-lg font-medium px-2 ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                Event Creator
              </legend>
              <div>
                <label
                  htmlFor="creatorEmail"
                  className={`block text-sm font-medium ${
                    isDark ? "text-white" : "text-gray-700"
                  }`}
                >
                  Creator Email
                </label>
                <input
                  type="email"
                  id="creatorEmail"
                  name="creatorEmail"
                  value={user?.email}
                  disabled
                  className={`mt-1 block w-full px-3 py-2 border rounded-md cursor-not-allowed ${
                    isDark
                      ? "bg-gray-800 border-gray-600 text-gray-300"
                      : "bg-gray-50 border-gray-300 text-gray-500"
                  }`}
                  readOnly
                />
              </div>
            </fieldset>
            <div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
