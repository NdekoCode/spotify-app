import React from "react";
import Albums from "../pages/Albums";
import Favoris from "../pages/Favoris";
import Genres from "../pages/Genres";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Tracks from "../pages/Tracks";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Home />,
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

export default routes;
export const asideLinks = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
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
    element: <Albums />,
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
    element: <Tracks />,
  },

  {
    path: "genres",
    name: "Genres",
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
    element: <Genres />,
  },

  {
    path: "favorites",
    name: "Favorite Tracks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        xml:space="preserve"
        width="655.359"
        height="655.359"
        style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"
        viewBox="0 0 6.827 6.827"
      >
        <path style="fill:#424242" d="M0 0h6.827v6.827H0z" />
        <path
          d="M3.413.853a2.56 2.56 0 1 1 0 5.12 2.56 2.56 0 0 1 0-5.12zm-.617 1.612c.316 0 .464.163.617.414.153-.25.302-.414.618-.414s.665.433.612.967c-.062.616-.583 1.082-1.23 1.403-.646-.32-1.168-.787-1.229-1.403-.053-.534.296-.967.612-.967zm.617-1.158a2.1 2.1 0 0 1 1.49.617 2.1 2.1 0 0 1 .617 1.49 2.1 2.1 0 0 1-.617 1.489 2.1 2.1 0 0 1-1.49.617 2.1 2.1 0 0 1-1.49-.617 2.1 2.1 0 0 1-.616-1.49 2.1 2.1 0 0 1 .617-1.49 2.1 2.1 0 0 1 1.49-.616zm1.377.73a1.94 1.94 0 0 0-1.377-.57 1.94 1.94 0 0 0-1.376.57 1.94 1.94 0 0 0-.57 1.376c0 .538.218 1.025.57 1.377.352.352.839.57 1.376.57a1.94 1.94 0 0 0 1.377-.57 1.94 1.94 0 0 0 .57-1.377 1.94 1.94 0 0 0-.57-1.376z"
          style="fill:#fffffe"
        />
      </svg>
    ),
    element: <Favoris />,
  },
];

export const homeRoute = [
  {
    path: "/login",
    name: "Login",
    icon: "",
    element: <Login />,
  },
  {
    path: "albums",
    name: "Album",
    icon: "",
    element: <Albums />,
  },

  {
    path: "tracks",
    name: "Tracks",
    icon: "",
    element: <Tracks />,
  },

  {
    path: "genres",
    name: "Genres",
    icon: "",
    element: <Genres />,
  },

  {
    path: "favorites",
    name: "Favorite Tracks",
    icon: "",
    element: <Favoris />,
  },
];
