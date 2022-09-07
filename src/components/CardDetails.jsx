import React, { useCallback } from "react";
import MusicContext from "../data/AppContext";
import { catString } from "../data/utilsFunc";

const CardDetails = ({ album }) => {
  const { artists, images, name, total_tracks, release_date, id, type } = album;
  const { handleFrame, setShowFrame, setTypePlay, setIdSong } = MusicContext();
  const showPlayer = useCallback(() => {
    setIdSong(id);
    setTypePlay(type);
    handleFrame();
    setShowFrame(true);
  });
  return (
    <div className="bg-white group py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8 h-80">
          <div className="h-48 overflow-visible w-1/2">
            <img
              className="rounded-3xl shadow-lg object-cover"
              src={images[0].url}
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold"> {catString(name)}</h2>
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
            <div className="relative  h-10 w-10">
              <div className="absolute animate-pulse rounded-2xl bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition duration-300 justify-evenly">
                <button
                  onClick={showPlayer}
                  className="hover:scale-110 text-green opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    fill="currentColor"
                    className="bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  </svg>
                </button>
              </div>
            </div>
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
