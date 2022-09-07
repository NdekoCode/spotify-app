import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ path, name, icon }) => {
  return (
    <li>
      <NavLink
        aria-current="page"
        to={path}
        className="lg:rounded-r-full flex justify-center lg:justify-start items-center sm:space-x-2 py-3 px-4 lg:px-6 lg:py-2 hover:bg-card hover:text-spotify w-1/5 lg:w-full text-spotify lg:bg-spotify lg:text-white"
      >
        <span>{icon}</span>
        <span className="hidden sm:block">{name}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
