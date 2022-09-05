import React from "react";
import Albums from "../pages/Albums";
import Home from "../pages/Home";

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
];

export default routes;
