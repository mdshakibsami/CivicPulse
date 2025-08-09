import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import UpcomingEvents from "../pages/Upcoming Events/UpcomingEvents";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import EventDetails from "../pages/EventDetails/EventDetails";
import JoinEvents from "../pages/JoinEvent/JoinEvents";
import ManageEvents from "../pages/Manage Events/ManageEvents";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "upcoming-events",
        Component: UpcomingEvents,
        loader: () => fetch("https://civic-pulse-server.vercel.app/upcoming"),
      },
      {
        path: "events/:id",
        Component: EventDetails,
        loader: ({ params }) =>
          fetch(`https://civic-pulse-server.vercel.app/details/${params.id}`),
      },
      {
        path: "create-event",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "joined-events",
        element: (
          <PrivateRoute>
            <JoinEvents></JoinEvents>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-events",
        element: (
          <PrivateRoute>
            <ManageEvents></ManageEvents>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
