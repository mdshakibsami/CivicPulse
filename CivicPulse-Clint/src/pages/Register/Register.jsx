import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import UseAuth from "../../hooks/useAuth";
import { useTheme } from "../../contexts/useTheme";
import Swal from "sweetalert2";
import loginAnimation from "../../assets/Lotties/register.json";
import Lottie from "lottie-react";

const Register = () => {
  const { createUser, updateUser } = UseAuth();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const location = useLocation();
  const from = location.state || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation using regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "Password Requirements",
        html: `Password must contain:<br>
        • At least 6 characters<br>
        • At least one uppercase letter<br>
        • At least one lowercase letter`,
        confirmButtonColor: "#059669",
        background: isDark ? "#1f2937" : "#ffffff",
        color: isDark ? "#ffffff" : "#000000",
      });
      return;
    }

    createUser(email, password)
      .then((res) => {
        // Show success message
        console.log(res);
        updateUser({ displayName: name, photoURL: photoURL })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });

        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "Your account has been created successfully",
          timer: 1500,
          showConfirmButton: false,
          background: isDark ? "#1f2937" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
          iconColor: "#059669",
        }).then(() => {
          navigate(from);
          form.reset();
        });
      })
      .catch((error) => {
        // Show error message
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "Something went wrong!",
          confirmButtonColor: "#059669",
          background: isDark ? "#1f2937" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
        });
      });
  };

  return (
    <div
      className={`min-h-screen py-16 ${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-md mx-auto ${
            isDark ? "bg-gray-800" : "bg-white"
          } rounded-2xl shadow-lg p-8`}
        >
          <div className="text-center mb-8">
            <h2
              className={`text-3xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              } mb-2`}
            >
              Create an Account
            </h2>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Join our community and start creating events
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium ${
                  isDark ? "text-gray-200" : "text-gray-700"
                } mb-1`}
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white focus:ring-emerald-400"
                    : "bg-white border-gray-300 text-gray-900 focus:ring-emerald-500"
                } focus:ring-2 focus:border-transparent transition-colors duration-200`}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="photoURL"
                className={`block text-sm font-medium ${
                  isDark ? "text-gray-200" : "text-gray-700"
                } mb-1`}
              >
                Photo URL
              </label>
              <input
                type="url"
                id="photoURL"
                name="photoURL"
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white focus:ring-emerald-400"
                    : "bg-white border-gray-300 text-gray-900 focus:ring-emerald-500"
                } focus:ring-2 focus:border-transparent transition-colors duration-200`}
                placeholder="Enter your photo URL"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium ${
                  isDark ? "text-gray-200" : "text-gray-700"
                } mb-1`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white focus:ring-emerald-400"
                    : "bg-white border-gray-300 text-gray-900 focus:ring-emerald-500"
                } focus:ring-2 focus:border-transparent transition-colors duration-200`}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${
                  isDark ? "text-gray-200" : "text-gray-700"
                } mb-1`}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white focus:ring-emerald-400"
                    : "bg-white border-gray-300 text-gray-900 focus:ring-emerald-500"
                } focus:ring-2 focus:border-transparent transition-colors duration-200`}
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg ${
                isDark
                  ? "bg-emerald-500 hover:bg-emerald-600"
                  : "bg-emerald-600 hover:bg-emerald-700"
              } text-white font-semibold transition-colors duration-200`}
            >
              Register
            </button>
          </form>

          <p
            className={`mt-4 text-center ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-emerald-500 hover:text-emerald-600 font-medium"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
