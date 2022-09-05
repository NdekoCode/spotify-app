import React from "react";
import Albums from "../pages/Albums";
import Home from "../pages/Home";
import Tracks from "../pages/Tracks";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: "",
    element: <Home />,
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
];

export default routes;
