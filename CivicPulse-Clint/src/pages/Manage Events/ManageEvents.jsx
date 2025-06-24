import React, { Suspense, useContext } from "react";
import ManageEventsList from "./ManageEventsList";
import UseAuth from "../../hooks/useAuth";
import { ThemeContext } from "../../contexts/theme";
import { manageEventsPromise } from "../../api/manageEventsapi";

const ManageEvents = () => {
  const { user } = UseAuth();
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <Suspense
        fallback={
          <div
            className={`min-h-screen flex items-center justify-center ${
              isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
            }`}
          >
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        }
      >
        <ManageEventsList
          manageEventsPromise={manageEventsPromise(
            user.email,
            user.accessToken
          )}
        />
      </Suspense>
    </div>
  );
};

export default ManageEvents;
