import { FiEdit2 } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios";
import UseAuth from "../../hooks/useAuth";
import { ThemeContext } from "../../contexts/theme";
import { useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";

const SingleEvent = ({ event, onEventUpdate }) => {
  const { user } = UseAuth();
  const { isDark } = useContext(ThemeContext);
  const { _id, eventDate, location, thumbnail, eventType, description, title } =
    event;

  const eventTypes = [
    "Cleanup",
    "Plantation",
    "Donation",
    "Food Drive",
    "Education",
    "Healthcare",
    "Others",
  ];

  const handleEdit = async () => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Reset time part for date comparison

    const { value: formValues } = await Swal.fire({
      title: "Edit Event",
      width: 800,
      html: `
        <div class="space-y-6">
          <fieldset class="border rounded-lg p-4 ${
            isDark ? "border-gray-600" : "border-gray-200"
          }">
            <legend class="text-lg font-medium text-emerald-600 px-2">Basic Information</legend>
            <div class="space-y-4">
              <div>
                <label for="swal-title" class="block text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }">Event Title</label>
                <input id="swal-title" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "border-gray-300 text-gray-900 placeholder-gray-500"
                }" value="${title}" placeholder="Enter event title">
              </div>
              <div>
                <label for="swal-description" class="block text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }">Description</label>
                <textarea id="swal-description" rows="4" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "border-gray-300 text-gray-900 placeholder-gray-500"
                }" placeholder="Describe your event">${description}</textarea>
              </div>
              <div>
                <label for="swal-type" class="block text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }">Event Type</label>
                <select id="swal-type" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "border-gray-300 text-gray-900"
                }">
                  ${eventTypes
                    .map(
                      (type) => `
                    <option value="${type}" ${
                        eventType === type ? "selected" : ""
                      } class="${
                        isDark ? "bg-gray-700" : "bg-white"
                      }">${type}</option>
                  `
                    )
                    .join("")}
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset class="border rounded-lg p-4 ${
            isDark ? "border-gray-600" : "border-gray-200"
          }">
            <legend class="text-lg font-medium text-emerald-600 px-2">Event Media</legend>
            <div>
              <label for="swal-thumbnail" class="block text-sm font-medium ${
                isDark ? "text-gray-300" : "text-gray-700"
              }">Thumbnail Image URL</label>
              <input id="swal-thumbnail" type="url" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 ${
                isDark
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "border-gray-300 text-gray-900 placeholder-gray-500"
              }" value="${thumbnail}" placeholder="Enter image URL">
            </div>
          </fieldset>

          <fieldset class="border rounded-lg p-4 ${
            isDark ? "border-gray-600" : "border-gray-200"
          }">
            <legend class="text-lg font-medium text-emerald-600 px-2">Location & Date</legend>
            <div class="space-y-4">
              <div>
                <label for="swal-location" class="block text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }">Location</label>
                <input id="swal-location" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "border-gray-300 text-gray-900 placeholder-gray-500"
                }" value="${location}" placeholder="Enter event location">
              </div>
              <div>
                <label for="swal-date" class="block text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }">Event Date</label>
                <input id="swal-date" type="date" min="${
                  currentDate.toISOString().split("T")[0]
                }" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 ${
        isDark
          ? "bg-gray-700 border-gray-600 text-white"
          : "border-gray-300 text-gray-900"
      }" value="${eventDate.split("T")[0]}" onchange="this.value < '${
        currentDate.toISOString().split("T")[0]
      }' && (this.value = '${currentDate.toISOString().split("T")[0]}')">
              </div>
            </div>
          </fieldset>
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save Changes",
      confirmButtonColor: "#059669",
      cancelButtonText: "Cancel",
      customClass: {
        container: "custom-swal-container",
        popup: `custom-swal-popup !max-w-3xl ${
          isDark ? "!bg-gray-800" : "!bg-white"
        }`,
      },
      background: isDark ? "#1f2937" : "#ffffff",
      preConfirm: () => {
        const values = {
          title: document.getElementById("swal-title").value,
          thumbnail: document.getElementById("swal-thumbnail").value,
          location: document.getElementById("swal-location").value,
          eventType: document.getElementById("swal-type").value,
          eventDate: document.getElementById("swal-date").value,
          description: document.getElementById("swal-description").value,
        }; // Basic validation for required fields
        if (
          !values.title ||
          !values.thumbnail ||
          !values.location ||
          !values.eventDate ||
          !values.description
        ) {
          Swal.showValidationMessage("Please fill in all fields");
          return false;
        }

        // Simple URL validation for thumbnail
        try {
          new URL(values.thumbnail);
        } catch {
          Swal.showValidationMessage(
            "Please enter a valid URL for the thumbnail image"
          );
          return false;
        }

        // Validate date is not in the past
        const selectedDate = new Date(values.eventDate);
        selectedDate.setHours(0, 0, 0, 0);
        if (selectedDate < currentDate) {
          Swal.showValidationMessage("Event date cannot be in the past");
          return false;
        }

        return values;
      },
    });

    if (formValues) {
      formValues.creatorEmail = user.email;
      try {
        const response = await axios.put(
          `https://civic-pulse-server.vercel.app/events-update/${_id}`,
          formValues
        );
        if (response.data.acknowledged) {
          await Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Event updated successfully",
            confirmButtonColor: "#059669",
            background: isDark ? "#1f2937" : "#ffffff",
            color: isDark ? "#ffffff" : "#000000",
          });
          if (onEventUpdate) {
            onEventUpdate({ ...event, ...formValues });
          }
        } else {
          throw new Error("Failed to update event");
        }
      } catch (error) {
        console.error("Update error:", error);
        await Swal.fire({
          title: "Error!",
          text: "Failed to update the event. Please try again.",
          icon: "error",
          confirmButtonColor: "#059669",
          background: isDark ? "#1f2937" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
        });
      }
    }
  };

  return (
    <tr
      className={`transition-colors ${
        isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"
      }`}
    >
      <td className="px-4 py-3 text-center">
        <div className="flex justify-center">
          <img
            className="w-16 h-16 object-cover rounded"
            src={thumbnail}
            alt={title}
          />
        </div>
      </td>
      <td
        className={`px-4 py-3 font-medium text-center ${
          isDark ? "text-gray-200" : "text-gray-800"
        }`}
      >
        {title}
      </td>
      <td
        className={`px-4 py-3 text-sm text-center ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {description.length > 100
          ? `${description.slice(0, 100)}...`
          : description}
      </td>
      <td className="px-4 py-3 text-center">
        <div className="flex justify-center">
          <span
            className={`px-3 py-1 text-sm rounded-full ${
              isDark
                ? "bg-emerald-900/50 text-emerald-200"
                : "bg-emerald-100 text-emerald-800"
            }`}
          >
            {eventType}
          </span>
        </div>
      </td>
      <td
        className={`px-4 py-3 text-sm text-center ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {new Date(eventDate).toLocaleDateString()}
      </td>
      <td
        className={`px-4 py-3 text-sm text-center ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {location}
      </td>
      <td className="px-4 py-3">
        <div className="flex justify-center">
          <button
            onClick={handleEdit}
            className={`p-2 rounded-full transition-colors ${
              isDark
                ? "text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/50"
                : "text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
            }`}
          >
            <FiEdit2 className="w-5 h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SingleEvent;
