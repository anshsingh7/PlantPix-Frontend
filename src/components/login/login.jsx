import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import {useAuth} from "../../context/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const Login = async (e) => {
    e.preventDefault();
    try {
      const { data } =await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        formData
      );
      if (data?.success) {
        setAuth({
          ...auth,
          user: data.user,
          token: data.token,
        });

        localStorage.setItem("auth", JSON.stringify(data));
        navigate(location.state || "/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lime-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/seedling.png"
            alt="Plant Logo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                value={email}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                value={password}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-main focus:ring-main border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/forgotPassword"
                className="font-medium text-main hover:text-gray-900"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-main hover:bg-mainDarker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
              onClick={Login}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-main group-hover:text-mainDark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.293 5.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 8.586l3.293-3.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <a
            href="/createAccount"
            className="font-medium text-main hover:text-mainDark"
          >
            create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
