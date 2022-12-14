import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ path, name, icon }) => {
  return (
    <li>
      <NavLink
        aria-current="page"
        to={path}
        className={(nav) =>
          (nav.isActive
            ? ' bg-spotify '
            : 'text-spotify hover:bg-card hover:text-spotify ') +
          'lg:rounded-r-full flex justify-center lg:justify-start items-center sm:space-x-2 py-3 px-4 w-full lg:px-6 lg:py-2 lg:w-full text-spotify lg:bg-spotify lg:text-white'
        }
      >
        <span>{icon}</span>
        <span className="hidden sm:block">{name}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
