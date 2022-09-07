import React from "react";

const UserData = () => {
  return (
    <div className="flex justify-around md:justify-end order-last md:order-first mt-10 md:mt-0 md:mb-0">
      <div className="flex items-center">
        <div className="flex items-center mr-4 text-gray-600 hover:text-gray-400 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={19}
            className="w-5 h-5 fill-current transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <title>Home</title>
            <path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z" />
            <path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" />
          </svg>
          <a target="blank" className="ml-2 text-sm" href="/">
            Home
          </a>
        </div>
        <a href="/" className="text-gray-600 hover:text-gray-400">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
              viewBox="0 0 24 24"
              width={13}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5 11h8v2H5v3l-5-4 5-4v3zm-1 7h2.708a8 8 0 1 0 0-12H4A9.985 9.985 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4z" />
            </svg>
            <h2 className="ml-2 text-sm">Logout</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default UserData;
