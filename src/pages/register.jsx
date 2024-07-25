import React from "react";
import { Announcement } from "./anouncement";
import { Navbar } from "./navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { server } from "../index";
import axios from "axios";

export const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("first");
      const { data } = await axios.post(
        `${server}/users/new`,
        {
          name,
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
      console.log("last");
      alert("Register Succefully");
      navigate("/login");
    } catch (error) {
      alert("Registration fail");
      navigate("/login");
    }
  };
  return (
    <>
      <Announcement />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br flex items-center justify-center">
        <div className="bg-cyan-50 p-8 rounded-lg shadow-lg w-full md:max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Register{" "}
          </h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                onChange={(e) => {
                  setname(e.target.value);
                }}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Name"
              />
            </div>
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
                onChange={(e) => {
                  setemail(e.target.value);
                }}
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
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
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
          </form>
        </div>
      </div>
    </>
  );
};
