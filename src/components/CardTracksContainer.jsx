import React from "react";
import PlayRecentTrackCard from "./PlayRecentTrackCard";

const CardTracksContainer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-8  gap-y-2">
      <PlayRecentTrackCard />
      <a
        className="bg-gradient-to-b from-gray-900 to-black mr-3 md:mr-6 mt-4 w-36 md:w-40 h-44 flex justify-center items-center text-gray-500 hover:text-gray-200 rounded"
        href="/track"
      >
        <h2>See More</h2>
      </a>
    </div>
  );
};

export default CardTracksContainer;
