import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImg from '../assets/img/images-1.png';

const Hero = () => {
  return (
    <div className="bg-black">
      <div className="container px-6 mx-auto flex flex-col items-center py-12 sm:py-24 md:py-5">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center">
          <div className="md:w-1/2  sm:w-2/3 items-center mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-7 md:leading-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Find and listen your favorite
              <span className="text-indigo-200"> Artist </span>
              Music Here
            </h1>
            <p className="mt-5 sm:mt-10  text-gray-400 font-normal text-sm sm:text-lg">
              The best Music website communicate a feel and make easy for
              visitors to discover your podcast.
            </p>

            <div className="mt-5 flex">
              <NavLink
                to="/dashboard"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold rounded text-white px-4 sm:px-8 border border-indigo-700 py-2 sm:py-4 text-sm"
              >
                Begin Listen
              </NavLink>
              <NavLink
                to="/login"
                className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-2 sm:py-4 text-sm"
              >
                Get Started
              </NavLink>
            </div>
          </div>
          <div className="md:w-1/2 md:basis-1/2">
            <div className="">
              <img
                className="relative rounded-full  z-10 right-10 -top-5"
                src={heroImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
