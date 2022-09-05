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
    path: "home",
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
    path: "albums",
    name: "Albums",
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
