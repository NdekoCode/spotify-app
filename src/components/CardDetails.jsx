import React from "react";
import { catString } from "../data/utilsFunc";

const CardDetails = ({ artists, images, name, total_tracks, release_date }) => {
  return (
    <div className="bg-white  py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
            <img
              className="rounded-3xl shadow-lg object-cover"
              src={images[0].url}
              height={images[0].height}
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold"> {name}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">
                {total_tracks}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Album</div>
              <div className="text-lg text-gray-800">
                {release_date.split("-")[0]}
              </div>
            </div>
            <p className=" text-gray-400 max-h-40 overflow-y-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex text-2xl font-bold text-a">
              {catString(artists[0].name)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
