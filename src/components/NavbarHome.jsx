import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/img/drc.svg";
import MusicContext from "../data/AppContext";
import { homeRoute } from "../routes/routes";
const NavbarHome = () => {
  const { menu, toggleMenu } = MusicContext();
  return (
    <nav className="w-full border-b">
      <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
        <div
          aria-label="Home. logo"
          role="img"
          className="flex font-black items-center text-gray-700 text-2xl"
        >
          <img src={logo} className="mr-3 h-6 sm:h-7" alt="NdekoMusic Logo" />
          NdekoMusic
        </div>
        <div>
          <button
            onClick={() => toggleMenu(true)}
            className="sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <svg
              aria-haspopup="true"
              aria-label="open Main Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden icon icon-tabler icon-tabler-menu"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={4} y1={8} x2={20} y2={8} />
              <line x1={4} y1={16} x2={20} y2={16} />
            </svg>
          </button>
          <div id="menu" className="md:block lg:block hidden">
            <button
              onClick={() => toggleMenu(false)}
              className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6"
            >
              <svg
                aria-label="close main menu"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </button>
            <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
              {homeRoute.map(({ path, name }, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0"
                >
                  <NavLink
                    to={path}
                    className={(nav) =>
                      nav.isActive
                        ? `bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white`
                        : "" +
                          `block py-2 pr-4 mx-3 pl-3 text-gray-700 rounded   hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent `
                    }
                    aria-current="page"
                  >
                    {" "}
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <NavLink
          className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm"
          to="/login"
        >
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarHome;
