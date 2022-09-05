import React from "react";

const CardDetails = ({ artists, images, total_tracks, release_date }) => {
  return (
    <div className="bg-white  py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
            <img className="rounded-3xl shadow-lg" src={images[0].url} alt="" />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">Sweet Tooth: Music</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
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
            <div className="flex text-2xl font-bold text-a">Schenswork</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
