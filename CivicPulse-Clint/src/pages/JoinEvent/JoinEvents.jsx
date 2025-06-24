import { Suspense } from "react";
import UseAuth from "../../hooks/useAuth";
import JoinEventsList from "./JoinEventsList";
import { joinedEventsPromise } from "../../api/joineventsapi";

const JoinEvents = () => {
  const { user } = UseAuth();
  console.log(user.accessToken)

  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <JoinEventsList
          joinedEventsPromise={joinedEventsPromise(user.email,user.accessToken)}
        ></JoinEventsList>
      </Suspense>
    </div>
  );
};

export default JoinEvents;
