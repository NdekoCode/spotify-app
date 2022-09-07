import React, { lazy, Suspense } from "react";
import LoadingPage from "../components/LoadingPage";
const Albums = lazy(() => import("../pages/Albums"));
const PlayList = lazy(() => import("../pages/PlayList"));
const Genres = lazy(() => import("../pages/Genres"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Login"));
const Tracks = lazy(() => import("../pages/Tracks"));
const Home = lazy(() => import("../pages/Home"));
const Artists = lazy(() => import("../pages/Artists"));

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/albums",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Albums />
      </Suspense>
    ),
  },

  {
    path: "/tracks",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Tracks />
      </Suspense>
    ),
  },

  {
    path: "/artists",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Artists />
      </Suspense>
    ),
  },
  {
    path: "/genres",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Genres />
      </Suspense>
    ),
  },

  {
    path: "/playlist",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <PlayList />
      </Suspense>
    ),
  },
];

export const asideLinks = [
  {
    path: "/profile",
    name: "Profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
        viewBox="0 0 24 24"
        width={19}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
      </svg>
    ),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        className="w-5 h-5 fill-current transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <title>Home</title>
        <path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z" />
        <path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" />
      </svg>
    ),
  },
  {
    path: "/albums",
    name: "Albums",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
        fill="currentColor"
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
    path: "/tracks",
    name: "Tracks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
        viewBox="0 0 24 24"
        width={19}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M20 3v14a4 4 0 1 1-2-3.465V5H9v12a4 4 0 1 1-2-3.465V3h13zM5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    ),
  },
  {
    path: "/artists",
    name: "Artists",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
        viewBox="0 0 24 24"
        width={19}
      >
        <path fill="none" d="M0 0H24V24H0z" />
        <path d="M19.243 4.757c1.462 1.466 2.012 3.493 1.65 5.38.568.16 1.106.463 1.554.908 1.404 1.394 1.404 3.654 0 5.047L17 21.5l-3.022-3L11 21.485 2.52 12.993C.417 10.637.496 7.019 2.757 4.757c2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zm-6.281 7.708c-.616.611-.616 1.597 0 2.208L17 18.682l4.038-4.009c.616-.611.616-1.597 0-2.208-.624-.62-1.642-.62-2.268.002l-1.772 1.754-1.407-1.396-.363-.36c-.624-.62-1.642-.62-2.266 0zm-8.79-6.293c-1.49 1.49-1.565 3.875-.192 5.451L11 18.654l1.559-1.562-1.006-1c-1.404-1.393-1.404-3.653 0-5.047 1.404-1.393 3.68-1.393 5.084 0l.363.36.363-.36c.425-.421.93-.715 1.465-.882.416-1.367.078-2.912-1.001-3.993-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154z" />
      </svg>
    ),
  },
  {
    path: "/playlist",
    name: "Playlist",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
        viewBox="0 0 24 24"
        width={19}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" />
      </svg>
    ),
  },
];

export const homeRoute = [
  {
    path: "/",
    name: "Home",
    icon: "",
  },
  {
    path: "/dashboard",
    name: "Premium",
    icon: "",
  },
  {
    path: "/help",
    name: "Help",
    icon: "",
  },

  {
    path: "/https://www.spotify.com/cd-sw/download/",
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
