import React from "react";
import { Link, NavLink } from "react-router";
import UseAuth from "../../../hooks/useAuth";
import { useTheme } from "../../../contexts/useTheme";
import Swal from "sweetalert2";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const { user, signout, loading } = UseAuth();
  const { isDark, toggleTheme } = useTheme();

  // logout function
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#059669",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
      background: isDark ? "#1F2937" : "#ffffff",
      color: isDark ? "#F3F4F6" : "#000000",
    }).then((result) => {
      if (result.isConfirmed) {
        signout()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "You have been successfully logged out",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
              background: isDark ? "#1F2937" : "#ffffff",
              color: isDark ? "#F3F4F6" : "#000000",
              iconColor: "#059669",
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message || "Something went wrong during logout",
              confirmButtonColor: "#059669",
              background: isDark ? "#1F2937" : "#ffffff",
              color: isDark ? "#F3F4F6" : "#000000",
            });
          });
      }
    });
  };

  // All nav links
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-emerald-500 font-medium"
              : `${
                  isDark ? "text-gray-300" : "text-gray-700"
                } hover:text-emerald-500`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/upcoming-events"
          className={({ isActive }) =>
            isActive
              ? "text-emerald-500 font-medium"
              : `${
                  isDark ? "text-gray-300" : "text-gray-700"
                } hover:text-emerald-500`
          }
        >
          Upcoming Events
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/create-event"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-500 font-medium"
                  : `${
                      isDark ? "text-gray-300" : "text-gray-700"
                    } hover:text-emerald-500`
              }
            >
              Create Events
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/joined-events"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-500 font-medium"
                  : `${
                      isDark ? "text-gray-300" : "text-gray-700"
                    } hover:text-emerald-500`
              }
            >
              Joined Events
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/manage-events"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-500 font-medium"
                  : `${
                      isDark ? "text-gray-300" : "text-gray-700"
                    } hover:text-emerald-500`
              }
            >
              Manage Events
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  if (loading) return <p></p>;

  return (
    <div className="sticky top-0 z-50">
      <div
        className={`navbar shadow-sm transition-colors duration-200 ${
          isDark ? "bg-gray-800 " : "bg-white"
        }`}
      >
        <div className="navbar-start  lg:pl-4">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-ghost lg:hidden ${
                isDark ? "hover:bg-gray-700" : "hover:bg-emerald-50"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-lg ${
                isDark ? "bg-gray-800 " : "bg-white"
              }`}
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className={`px-2 sm:px-4 py-2 rounded-md font-bold text-lg sm:text-xl block hover:bg-emerald-50 ${
              isDark ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            <span className="hidden sm:inline">Civic Pulse</span>
            <span className="sm:hidden">CP</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end pr-2 sm:pr-4 md:pr-6 lg:pr-10">
          <button
            onClick={toggleTheme}
            className={`btn btn-ghost btn-circle text-lg sm:text-xl mr-1 sm:mr-2 ${
              isDark ? "hover:bg-gray-700" : "hover:bg-emerald-50"
            }`}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <FiSun className="text-yellow-400" /> : <FiMoon />}
          </button>
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-8 sm:w-10 rounded-full ring ring-emerald-500 ring-offset-2">
                    <img
                      alt="user profile"
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co/G2jQ6rY/default-avatar.png"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg rounded-box w-52 ${
                    isDark ? "bg-gray-800 " : "bg-white"
                  }`}
                >
                  <li
                    className={`px-4 py-2 border-b ${
                      isDark
                        ? "text-gray-200 border-gray-700"
                        : "text-gray-500 border-gray-100"
                    }`}
                  >
                    <p className="font-medium">{user?.displayName || "User"}</p>
                    <p className="text-xs">{user?.email}</p>
                  </li>
                  <li>
                    <NavLink
                      to="/create-event"
                      className={({ isActive }) =>
                        isActive
                          ? "text-emerald-500"
                          : `${
                              isDark ? "text-white" : "text-gray-700"
                            } hover:text-emerald-500`
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Create Event
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/manage-events"
                      className={({ isActive }) =>
                        isActive
                          ? "text-emerald-500"
                          : `${
                              isDark ? "text-white" : "text-gray-700"
                            } hover:text-emerald-500`
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      Manage Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/joined-events"
                      className={({ isActive }) =>
                        isActive
                          ? "text-emerald-500"
                          : `${
                              isDark ? "text-white" : "text-gray-700"
                            } hover:text-emerald-500`
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Joined Events
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className={`${
                        isDark ? "text-white" : "text-gray-700"
                      } hover:text-emerald-500`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Link
                to="/login"
                className="btn btn-ghost text-emerald-500 hover:bg-emerald-50 hover:text-gray-700 text-sm sm:text-base px-2 sm:px-4"
              >
                Login
              </Link>
              <Link
                to="/register"
                className={`btn btn-ghost text-sm sm:text-base px-2 sm:px-4 ${
                  isDark
                    ? "text-gray-700 bg-white"
                    : "bg-emerald-600 text-white"
                }`}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
