import React from "react";

const TrackData = () => {
  return (
    <div className="mt-1 w-full">
      <div className="table justify-between w-full">
        <div className="w-4/4 lg:w-auto flex justify-between text-gray-700 mb-4 tracking-wider text-sm border-gray-800 sticky top-0 pt-8 bg-black border-bottom">
          <div className="w-12/12 lg:w-7/12 text-left">TRACK</div>
          <div className="w-1/12 hidden lg:block text-left">DURATION</div>
        </div>
        <span className="inline-block w-full">
          <div className="lg:flex text-gray-400 justify-between w-full object-contain">
            <div className="w-8/12 lg:w-7/12 truncate">
              <a href="/track/5YF3QXyV0uotxdTrYq64ZK">
                <div className="w-full flex items-start mb-7 pr-8 truncate overflow-hidden">
                  <div className="hidden sm:block sm:w-12 sm:h-12 overflow-hidden rounded-full">
                    <img
                      src="https://i.scdn.co/image/ab67616d00001e02fd1ad7c3b43f2786143478b2"
                      alt="track"
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4 truncate">
                    <h4 className="text-gray-400 hover:text-white truncate">
                      I'm a King - Remix
                    </h4>
                    <h3 className="text-sm text-gray-700 truncate">
                      T.I., The Game, P$C
                    </h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/12 hidden lg:block">1:27</div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default TrackData;
