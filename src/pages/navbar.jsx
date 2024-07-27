import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { server, Context } from "../index";
import Logo from "../Assets/Logo.png";

export const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });
      alert("Logout successfully");
      setIsAuthenticated(false);
    } catch (error) {
      alert("Logout failed");
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="w-full flex items-center justify-center px-3 fixed top-10 bg-blue-500">
      <div className="w-5/6 flex justify-between items-center">
        <div className="gap-24 flex justify-between items-center">
          <div className="md:hidden relative">
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              &#8801;
            </div>
            <ul
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:flex md:flex-row absolute md:static bg-white border border-gray-300 p-4 mt-2 left-0 md:left-auto md:right-auto w-48 md:w-auto z-50`}
              style={{ left: "0", top: "100%" }}
            >
              <li className="w-full md:w-auto">
                <a href="/" className="block p-2 md:p-0">
                  Home
                </a>
              </li>
              <li className="w-full md:w-auto">
                <a href="/refer" className="block p-2 md:p-0">
                  Refer & Earn
                </a>
              </li>
              <li className="w-full md:w-auto">
                <a href="#about-us" className="block p-2 md:p-0">
                  About Us
                </a>
              </li>
              <li className="w-full md:w-auto">
                {isAuthenticated ? (
                  <button
                    onClick={logoutHandler}
                    className="block w-full text-left p-2 md:p-0 md:flex items-center justify-center h-10 rounded-md bg-gray-200 text-black hover:bg-gray-300"
                  >
                    Logout
                  </button>
                ) : (
                  <a
                    href="/login"
                    className="block w-full text-left p-2 md:p-0 md:flex items-center justify-center h-10 rounded-md bg-gray-200 text-black hover:bg-gray-300"
                  >
                    Login
                  </a>
                )}
              </li>
              <li className="w-full mt-2 md:w-auto">
                <button className="block w-full text-left p-2 md:p-0 md:flex items-center justify-center text-white bg-blue-500 h-10 rounded-md hover:bg-blue-600">
                  Try for free
                </button>
              </li>
            </ul>
          </div>
          <div className="md:right-0">
            <a href="/" className="right-0 flex items-center gap-3">
              <img src={Logo} alt="Logo" className="md:w-36 w-28 h-28 mr-2" />
            </a>
          </div>
        </div>
        <div>
          <ul className="hidden md:flex gap-4 items-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/refer">Refer & Earn</a>
            </li>
            <li>About Us</li>
            <li>
              {isAuthenticated ? (
                <button
                  onClick={logoutHandler}
                  className="flex items-center justify-center h-10 w-32 rounded-md bg-gray-200 text-black hover:bg-gray-300"
                >
                  Logout
                </button>
              ) : (
                <a href="/login">
                  <button className="flex items-center justify-center h-10 w-32 rounded-md bg-gray-200 text-black hover:bg-gray-300">
                    Login
                  </button>
                </a>
              )}
            </li>
            <li>
              <button className="flex items-center justify-center text-white bg-blue-500 h-10 w-32 rounded-md hover:bg-blue-600">
                Try for free
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
