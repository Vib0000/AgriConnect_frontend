import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { server, Context } from "../index";

export const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const logoutHandler = async () => {
    console.log("Logout button clicked"); // Log for checking button click

    try {
      const response = await axios.get(`${server}/users/logout`, {
        withCredentials: true, 
      });

      alert("Logout succesfully"); 
      setIsAuthenticated(false);
      console.log("User logged out, state updated to:", isAuthenticated);
    } catch (error) {
      alert("Logout failed");
      setIsAuthenticated(true);

    }
  };
  return (
    <div className="w-full flex items-center justify-center px-3 fixed top-12">
      <div className="w-5/6 flex justify-between items-center">
        <div className="gap-5">
          <a href="/" className="flex items-center gap-3">
            <img
              src="https://s3-alpha-sig.figma.com/img/0815/78d9/872c740534629bce867325cd8ecbc7df?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GmdChUcyt3JgYBuC3GWhV8p~YZmhQOmkRuIkjUkblCoKPx8hIga4-kK4D82DjlhS7SviFpGbVQuTteR07v84lXPbXySFAoJyXOKcPN9B4QBkLT69TnJThel12JfH0j74f3ZXoJ4geZaEQNyjF4KHupZrA3fJqSke-ayVQwUi8UD8NxNUqxcfBllawri9GbQKurn3-hrb0qNNVOylGO10VfJQxOkYWvkbdXdIHNgIxTtDgfm8r0QijuSnqVTuc8XEO8Uik91WYsE2o86Hg1-qG-t1KNS1QVs8Op-upfTSjzGciInz7uv8m~q15MwOnUhhZVdCxSNuh7dMup5pJp2PtA__"
              alt="Logo"
              className="w-30 h-10 mr-2"
            />
            <button className="flex items-center justify-center text-white bg-blue-500 h-10 w-32 rounded-md">
              <p className="mr-1">Course</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-current text-white"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
          </a>
        </div>
        <div>
          <ul className="flex gap-4 items-center">
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
                  className="flex items-center justify-center h-10 w-32 rounded-md bg-[#94A3B8] text-black"
                >
                  Logout
                </button>
              ) : (
                <button className="flex items-center justify-center h-10 w-32 rounded-md bg-[#94A3B8] text-black">
                  <a href="/login">Login</a>
                </button>
              )}
            </li>
            <li>
              <button className="flex items-center justify-center text-white bg-blue-500 h-10 w-32 rounded-md">
                Try for free
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
