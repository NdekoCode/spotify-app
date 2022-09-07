import React from "react";

const PlayRecentTrackCard = () => {
  return (
    <a href="/track/1IAzD1muglOxOcPbUHs70R">
      <div className="bg-card pb-1.5 mr-3 md:mr-6 mt-4 w-36 md:w-40 shadow-2xl rounded-sm transition-transform duration-200 transform hover:scale-105">
        <div className="px-4">
          <div className="image pt-4 opacity-75">
            <img
              src="https://i.scdn.co/image/ab67616d00001e02b6d4478c6f91f1cb2d326c78"
              alt=""
              className="w-32 h-32 object-cover"
            />
          </div>
          <div className="w-32">
            <h3 className="mt-1 text-gray-400 truncate">Whatever You Like</h3>
            <div className="text-sm text-gray-700 mb-2">
              <h3 className="truncate">T.I.</h3>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PlayRecentTrackCard;
