import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/drc.svg";
import { asideLinks } from "../routes/routes";
const Sidebar = () => {
  return (
    <>
      <aside className="z-50 fixed bottom-0 border-t-2 border-card lg:left-0 w-full lg:w-48 bg-black shadow-inner lg:h-screen text-white lg:pt-16">
        <a href="#" className="flex items-center pl-2.5 mb-10">
          <img src={logo} className="mr-3 h-6 sm:h-7" alt="NdekoMusic Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            NdekoMusic
          </span>
        </a>
        <ul className="lg:mt-16 lg:space-y-4 flex lg:flex-col justify-between h-auto">
          {asideLinks.map(({ path, name, icon }, index) => (
            <li key={index}>
              <NavLink
                aria-current="page"
                to={path}
                className="lg:rounded-r-full flex justify-center lg:justify-start items-center sm:space-x-2 py-3 px-4 lg:px-6 lg:py-2 hover:bg-card hover:text-spotify w-1/5 lg:w-full text-spotify lg:bg-spotify lg:text-white"
              >
                <span>{icon}</span>
                <span className="hidden sm:block">{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
