import React, { useState, useContext, useEffect } from "react";
import { Announcement } from "./anouncement";
import { Navbar } from "./navbar";
import { useNavigate } from "react-router-dom";
import { server, Context } from "../index";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("isLoggedIn changed:", isLoggedIn);
  // }, [isLoggedIn]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log("success 1");
      const { data } = await axios.post(
        `${server}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // console.log("before setting isLoggedIn:", isLoggedIn);

      // setIsLoggedIn(true);
      // console.log("after setting isLoggedIn:", isLoggedIn);

      console.log("success 2");
      alert("Login successfully");
      setIsAuthenticated(true);

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Login fail");
      setIsAuthenticated(false);

      navigate("/register");
    }
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br flex items-center justify-center">
        <div className="bg-cyan-50 p-8 rounded-lg shadow-lg w-full md:max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
            <div>
              {" "}
              Don't have Account
              <button className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <a href="/register">Create Account</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
