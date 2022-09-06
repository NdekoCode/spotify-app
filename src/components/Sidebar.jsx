import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/drc.svg";
import { asideLinks } from "../routes/routes";
const Sidebar = () => {
  return (
    <aside
      className="w-96 min-w-max min-h-screen bg-gray-50 rounded dark:bg-gray-800 p-5"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto pt-0 p-5">
        <a href="#" className="flex items-center pl-2.5 mb-10">
          <img src={logo} className="mr-3 h-6 sm:h-7" alt="NdekoMusic Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            NdekoMusic
          </span>
        </a>
        <ul className="space-y-2">
          {asideLinks.map(({ path, name, icon }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {icon}
                <span className="ml-3">{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
