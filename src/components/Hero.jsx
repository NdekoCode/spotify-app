import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
              Find and listen your favorite
              <span className="text-indigo-700">artist</span>
              Music Here
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
              The best Music website communicate a feel and make easy for
              visitors to discover your podcast.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <NavLink
              to="/dashboard"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm"
            >
              Begin Listen
            </NavLink>
            <NavLink
              to="/login"
              className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
