import logo from "../assets/img/drc.svg";
import { asideLinks } from "../routes/routes";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
  return (
    <aside className="z-50 fixed bottom-0 shadow-xl  shadow-gray-100 md:shadow border-card lg:left-0 w-full lg:w-48 bg-black lg:h-screen text-white lg:pt-12">
      <a href="#" className="hidden lg:flex lg:items-center pl-2.5 mb-10">
        <img src={logo} className="mr-3 h-6 sm:h-7" alt="NdekoMusic Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          NdekoMusic
        </span>
      </a>
      <ul className="lg:mt-16 lg:space-y-4 flex lg:flex-col justify-between h-auto">
        {asideLinks.map(({ path, name, icon }, index) => (
          <SidebarItem path={path} name={name} icon={icon} key={index} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
