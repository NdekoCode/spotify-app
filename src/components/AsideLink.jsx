import React from "react";
import { NavLink } from "react-router-dom";

const AsideLink = ({ to, name, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {icon}
        <span className="ml-3">{name}</span>
      </NavLink>
    </li>
  );
};

export default AsideLink;
