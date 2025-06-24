import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import UseAuth from "../../hooks/useAuth";
import { useTheme } from "../../contexts/useTheme";
import Swal from "sweetalert2";

const Login = () => {
  const { signin, googleSignIn } = UseAuth();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const location = useLocation();
  const from = location.state || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signin(email, password)
      .then(() => {
        // Show success message
        Swal.fire({
          icon: "success",
          title: "Welcome back!",
          text: "You have successfully logged in",
          timer: 1500,
          showConfirmButton: false,
          background: isDark ? "#1f2937" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
          iconColor: "#059669",
        }).then(() => {
          form.reset();
          navigate("/");
        });
      })
      .catch((error) => {
        // Show error message
        // Show error message
        if (error.message == "Firebase: Error (auth/invalid-credential).") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect Password or Email",
            confirmButtonColor: "#059669",
            background: isDark ? "#1f2937" : "#ffffff",
            color: isDark ? "#ffffff" : "#000000",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something was wrong",
            confirmButtonColor: "#059669",
            background: isDark ? "#1f2937" : "#ffffff",
            color: isDark ? "#ffffff" : "#000000",
          });
        }
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        // Show success message
        Swal.fire({
          icon: "success",
          title: "Welcome back!",
          text: "You have successfully logged in with Google",
          timer: 1500,
          showConfirmButton: false,
          background: isDark ? "#1f2937" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
          iconColor: "#059669",
        }).then(() => {
          navigate(from);
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
              Welcome Back
            </h2>
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Sign in to continue to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
              Sign In
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className={`absolute inset-0 flex items-center`}>
                <div
                  className={`w-full border-t ${
                    isDark ? "border-gray-700" : "border-gray-300"
                  }`}
                ></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span
                  className={`px-2 ${
                    isDark
                      ? "bg-gray-800 text-gray-400"
                      : "bg-white text-gray-500"
                  }`}
                >
                  Or continue with
                </span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className={`mt-4 w-full py-3 px-4 rounded-lg border ${
                isDark
                  ? "border-gray-700 hover:bg-gray-700"
                  : "border-gray-300 hover:bg-gray-50"
              } ${
                isDark ? "text-white" : "text-gray-700"
              } font-semibold flex items-center justify-center gap-2 transition-colors duration-200`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
                />
              </svg>
              Continue with Google
            </button>
          </div>

          <p
            className={`mt-4 text-center ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-emerald-500 hover:text-emerald-600 font-medium"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
