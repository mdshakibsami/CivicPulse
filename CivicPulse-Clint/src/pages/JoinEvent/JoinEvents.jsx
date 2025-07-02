import { Suspense, useContext, useMemo } from "react";
import UseAuth from "../../hooks/useAuth";
import JoinEventsList from "./JoinEventsList";
import { ThemeContext } from "../../contexts/theme";
import { joinedEventsPromise } from "../../api/joineventsapi";

const JoinEvents = () => {
  const { user } = UseAuth();
  const { isDark } = useContext(ThemeContext);
  console.log(user.accessToken);

  // Memoize the promise to prevent refetching on theme changes
  const memoizedJoinedEventsPromise = useMemo(() => {
    return joinedEventsPromise(user.email, user.accessToken);
  }, [user.email, user.accessToken]);

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
        <JoinEventsList
          joinedEventsPromise={memoizedJoinedEventsPromise}
        ></JoinEventsList>
      </Suspense>
    </div>
  );
};

export default JoinEvents;
