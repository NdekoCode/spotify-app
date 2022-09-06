import React from "react";
import Albums from "../pages/Albums";
import Favoris from "../pages/Favoris";
import Genres from "../pages/Genres";
import Login from "../pages/Login";
import Tracks from "../pages/Tracks";
import Dashboard from "../pages/Dashboard";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "albums",
    element: <Albums />,
  },

  {
    path: "tracks",
    element: <Tracks />,
  },

  {
    path: "genres",
    element: <Genres />,
  },

  {
    path: "favorites",
    element: <Favoris />,
  },
];

export const asideLinks = [
  {
    path: "/",
    name: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        viewBox="0 0 512 512"
      >
        <title>Home</title>
        <path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z" />
        <path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" />
      </svg>
    ),
  },
  {
    path: "albums",
    name: "Albums",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      >
        <g data-name="album music">
          <path d="M22.76 7.34C22.32 6.85 23.8 7 2 7a1 1 0 0 0-1 1.14l2 14A1 1 0 0 0 4 23h16a1 1 0 0 0 1-.86C23.15 7 23.18 7.84 22.76 7.34zM19.13 21H4.87L3.15 9h17.7z" />
          <path d="M12 20c3.31 0 6-2.24 6-5s-2.69-5-6-5-6 2.24-6 5 2.69 5 6 5zm0-8c2.21 0 4 1.35 4 3s-1.79 3-4 3-4-1.35-4-3 1.79-3 4-3z" />
          <path d="M12 16a1 1 0 0 0 0-2 1 1 0 0 0 0 2zM3 6h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zM5 3h14a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
        </g>
      </svg>
    ),
  },

  {
    path: "tracks",
    name: "Tracks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      >
        <g data-name="35.Music">
          <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
          <path d="M10 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
          <path d="M13 15h-2V4.719l1.243.311C12.437 5.079 17 6.262 17 10h-2a3.1 3.1 0 0 0-2-2.542z" />
        </g>
      </svg>
    ),
  },

  {
    path: "genres",
    name: "Genres",
    icon: (
      <>
        {/*?xml version="1.0" ?*/}
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        >
          <title />
          <path
            d="M22.71,2.71,21.29,1.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14.63,8A4.52,4.52,0,0,0,8.09,10a6,6,0,0,0-4.33,1.75A6,6,0,0,0,8,22a5.93,5.93,0,0,0,4.24-1.76A6,6,0,0,0,14,15.91a4.52,4.52,0,0,0,2.06-6.54l5.24-5.25a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,2.71ZM9.41,17.41a2,2,0,1,1,0-2.82A2,2,0,0,1,9.41,17.41Z"
            fill="#464646"
          />
        </svg>
      </>
    ),
  },

  {
    path: "favorites",
    name: "Favorite Tracks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        viewBox="0 0 512 512"
      >
        <title>Heart Circle</title>
        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm74.69 252.82c-9.38 11.44-26.4 29.73-65.7 56.41a15.93 15.93 0 01-18 0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 20.4 0 35 10.63 44.1 20.41a6 6 0 008.72 0c9.11-9.78 23.7-20.41 44.1-20.41 30.31 0 55.22 25.27 55.53 56.33.3 27.1-9.29 52.13-29.28 76.5z" />
      </svg>
    ),
  },
];

export const homeRoute = [
  {
    path: "/",
    name: "Premium",
    icon: "",
  },
  {
    path: "#",
    name: "Help",
    icon: "",
  },

  {
    path: "https://www.spotify.com/cd-sw/download/",
    name: "Download",
    icon: "",
  },

  {
    path: "/login",
    name: "Sign Up",
    icon: "",
  },

  {
    path: "/login",
    name: "Login",
    icon: "",
  },
];

export default routes;
