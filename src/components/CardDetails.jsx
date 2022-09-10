/* eslint-disable camelcase */
import React, { useCallback } from 'react';
import MusicContext from '../data/AppContext';
import { catString } from '../data/utilsFunc';

function CardDetails({ album }) {
  // eslint-disable-next-line camelcase
  const { artists, images, name, total_tracks, release_date, id, type } = album;
  const { handleFrame, setShowFrame, setTypePlay, setIdSong } = MusicContext();
  const showPlayer = useCallback(() => {
    setIdSong(id);
    setTypePlay(type);
    handleFrame();
    setShowFrame(true);
  });
  return (
    // <div className="bg-dark group py-4 sm:py-6 flex flex-col justify-center md:py-12">
    <div
      className="sm:max-w-xl sm:mx-auto 	 rounded-lg sm:rounded-3xl 
 overflow-hidden "
      style={{ backgroundImage: `url(${album.images[0].url})` }}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        onClick={showPlayer}
        className="group
relative cursor-pointer duration-300  bg-gray-800 shadow-lg  sm:max-h-80 p-5 md:p-8 flex flex-wrap sm:flex-nowrap space-x-8 sm:h-80 bg-transparent backdrop-blur h-full w-full"
      >
        <div className="sm:h-48  w-full sm:w-1/2">
          <img
            className="rounded-3xl shadow-lg object-cover"
            src={images[0].url}
            alt=""
          />
        </div>
        <div className="absolute animate-pulse rounded-2xl bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition duration-300 justify-evenly">
          <button
            type="button"
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
        <div className=" flex flex-col w-full mt-5 sm:mt-0 sm:w-1/2 space-y-4 ">
          <div className="flex justify-between items-start w-full sm:w-auto">
            <h2 className="text-lg md:text-2xl font-bold break-words shadow-inner ">
              {catString(name)}
            </h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">
              {total_tracks}
            </div>
          </div>
          <div className="pb-10">
            <div className="text-sm text-gray-400 shadow-inner ">Album</div>
            <div className="text-base md:text-lg text-gray-300">
              {release_date.split('-')[0]}
            </div>
          </div>

          <div className="flex text-xl md:text-2xl font-bold text-a shadow-inner ">
            {catString(artists[0].name)}
          </div>
        </div>
      </a>
    </div>
    // </div>
  );
}

export default CardDetails;
