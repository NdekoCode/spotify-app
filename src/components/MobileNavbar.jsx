import React from "react";

const MobileNavbar = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 pt-5 pb-24">
        <div className="w-full max-w-md mx-auto">
          <div className="px-7 bg-white shadow-lg rounded-2xl mb-5">
            <div className="flex">
              <div className="flex-auto hover:w-full group">
                <a
                  href="#"
                  className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                >
                  <span className="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                    <i className="far fa-home text-2xl pt-1" />
                    <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                      Home
                    </span>
                  </span>
                </a>
              </div>
              <div className="flex-auto hover:w-full group">
                <a
                  href="#"
                  className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                >
                  <span className="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                    <i className="far fa-compass text-2xl pt-1" />
                    <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                      Explore
                    </span>
                  </span>
                </a>
              </div>
              <div className="flex-auto hover:w-full group">
                <a
                  href="#"
                  className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                >
                  <span className="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                    <i className="far fa-search text-2xl pt-1" />
                    <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                      Search
                    </span>
                  </span>
                </a>
              </div>
              <div className="flex-auto hover:w-full group">
                <a
                  href="#"
                  className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                >
                  <span className="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                    <i className="far fa-cog text-2xl pt-1" />
                    <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                      Settings
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="px-7 bg-white shadow-lg rounded-2xl mb-5">
            <div className="flex">
              <div className="flex-auto hover:w-full group">
                <a
                  href="#"
                  className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                >
                  <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                    <i className="far fa-home text-2xl pt-1" />
                    <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                      Home
                    </span>
                  </span>
                </a>
              </div>
              <div className="flex-auto hover:w-full group">
                <a
                  href="#"
                  className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                >
                  <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                    <i className="far fa-compass text-2xl pt-1" />
                    <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                      Explore
                    </span>
                  </span>
                </a>
              </div>
              <div className="flex-auto hover:w-full group">
                <a
                  href="#"
                  className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                >
                  <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                    <i className="far fa-search text-2xl pt-1" />
                    <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                      Search
                    </span>
                  </span>
                </a>
              </div>
              <div className="flex-auto hover:w-full group">
                <a
                  href="#"
                  className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
                >
                  <span className="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                    <i className="far fa-cog text-2xl pt-1" />
                    <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                      Settings
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="px-7 bg-white shadow-lg rounded-2xl mb-5">
            <div className="flex">
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
                >
                  <span className="block px-1 pt-1 pb-2">
                    <i className="far fa-home text-2xl pt-1 mb-1 block" />
                    <span className="block text-xs pb-1">Home</span>
                  </span>
                </a>
              </div>
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
                >
                  <span className="block px-1 pt-1 pb-2">
                    <i className="far fa-compass text-2xl pt-1 mb-1 block" />
                    <span className="block text-xs pb-1">Explore</span>
                  </span>
                </a>
              </div>
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
                >
                  <span className="block px-1 pt-1 pb-2">
                    <i className="far fa-search text-2xl pt-1 mb-1 block" />
                    <span className="block text-xs pb-1">Search</span>
                  </span>
                </a>
              </div>
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
                >
                  <span className="block px-1 pt-1 pb-2">
                    <i className="far fa-cog text-2xl pt-1 mb-1 block" />
                    <span className="block text-xs pb-1">Settings</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="px-7 bg-white shadow-lg rounded-2xl">
            <div className="flex">
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 pt-1 pb-1">
                    <i className="far fa-home text-2xl pt-1 mb-1 block" />
                    <span className="block text-xs pb-2">Home</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                  </span>
                </a>
              </div>
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 pt-1 pb-1">
                    <i className="far fa-compass text-2xl pt-1 mb-1 block" />
                    <span className="block text-xs pb-2">Explore</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                  </span>
                </a>
              </div>
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 pt-1 pb-1">
                    <i className="far fa-search text-2xl pt-1 mb-1 block" />
                    <span className="block text-xs pb-2">Search</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                  </span>
                </a>
              </div>
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 pt-1 pb-1">
                    <i className="far fa-cog text-2xl pt-1 mb-1 block" />
                    <span className="block text-xs pb-2">Settings</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
