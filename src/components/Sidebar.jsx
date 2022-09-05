import React from "react";
import logo from "../assets/img/drc.svg";
import { asideLinks } from "../routes/routes";
import AsideLink from "./AsideLink";
const Sidebar = () => {
  return (
    <aside
      className="w-80 min-h-screen mx-auto bg-gray-50 rounded dark:bg-gray-800 p-5"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto pt-0 p-5">
        <a
          href="https://flowbite.com/"
          className="flex items-center pl-2.5 mb-10"
        >
          <img src={logo} className="mr-3 h-6 sm:h-7" alt="NdekoMusic Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            NdekoMusic
          </span>
        </a>
        <ul className="space-y-2">
          {asideLinks.map(({ path, name, icon }, index) => (
            <AsideLink key={index} path={path} name={name} icon={icon} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
