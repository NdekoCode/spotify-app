import React, { useCallback } from 'react';
import MusicContext from '../data/AppContext';

import artistImg from '../assets/img/artist.jpeg';

function CardTrack({ track }) {
  const { album, artists, name, id, type } = track;

  const { handleFrame, setTypePlay, setShowFrame, setIdSong } = MusicContext();
  const showPlayer = useCallback(() => {
    setIdSong(id);
    setTypePlay(type);
    handleFrame();
    setShowFrame(true);
  });
  return (
    <div className="card">
      <div
        className="card-track card-bg ounded-2xl bg-gray-400 backdrop-blur-sm dark:bg-gray-700 shadow cursor-pointer min-w-max mb-3 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${album.images[0].url ?? artistImg})` }}
      >
        <div className="group relative h-60 flex flex-col items-center justify-center ">
          <img
            className="block card-img rounded-full h-40 w-40 shadow-2xl"
            src={album.images[0].url ?? artistImg}
            alt={name}
          />
          <div className="absolute h-40 w-40 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-60 flex items-center rounded-full group-hover:opacity-100 transition duration-300 justify-evenly">
            <button
              type="button"
              onClick={showPlayer}
              className="hover:scale-110 text-green-500 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300"
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
        <div className="p-1 absolute bottom-0 left-0 right-0 pb-3 rounded-b px-3 bg-transparent backdrop-blur">
          <h3 className="text-white text-lg mb-3 font-semibold">
            {artists.map(
              (artist, index) =>
                artist.name + (index + 1 < artists.length ? ', ' : ''),
            )}
          </h3>
          <p className="text-gray-50 dark:text-gray-200 text-base">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default CardTrack;
