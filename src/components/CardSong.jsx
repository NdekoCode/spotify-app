/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from 'react';
import MusicContext from '../data/AppContext';
import artistImg from '../assets/img/artist.jpeg';
function CardSong({ song }) {
  const { id, album, type, artists, name } = song;
  const { handleFrame, setTypePlay, setShowFrame, setIdSong } = MusicContext();

  const showPlayer = useCallback((evt) => {
    evt.preventDefault();
    setIdSong(id);
    setTypePlay(type);
    handleFrame();
    setShowFrame(true);
  });
  return (
    <a href="#" onClick={showPlayer}>
      <div className="bg-card pb-1.5 mr-3 md:mr-6 mt-4 w-36 md:w-40 shadow-2xl rounded-sm transition-transform duration-200 transform hover:scale-105">
        <div className="px-4">
          <div className="relative group image pt-4 opacity-75 bg-transparent backdrop-blur">
            <img
              src={album.images[0].url ?? artistImg}
              alt={name}
              className="w-32 h-32 object-cover"
            />

            <div className="absolute bg-black rounded-2xl bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition duration-300 justify-evenly">
              <button
                type="button"
                className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </button>
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
              <button
                type="button"
                className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300"
              >
                <svg
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="220.153 218.369 24.418 24.418"
                  width="24.418"
                  height="24.418"
                >
                  <path
                    d="M 232.362 218.369 C 225.63 218.369 220.153 223.846 220.153 230.578 C 220.153 237.31 225.63 242.787 232.362 242.787 C 239.094 242.787 244.571 237.31 244.571 230.578 C 244.571 223.846 239.094 218.369 232.362 218.369 Z M 237.058 231.517 L 233.301 231.517 L 233.301 235.274 C 233.301 235.997 232.518 236.448 231.892 236.087 C 231.602 235.919 231.423 235.609 231.423 235.274 L 231.423 231.517 L 227.666 231.517 C 226.943 231.517 226.492 230.734 226.853 230.108 C 227.021 229.818 227.331 229.639 227.666 229.639 L 231.423 229.639 L 231.423 225.882 C 231.423 225.159 232.206 224.708 232.832 225.069 C 233.122 225.237 233.301 225.547 233.301 225.882 L 233.301 229.639 L 237.058 229.639 C 237.781 229.639 238.232 230.422 237.871 231.048 C 237.703 231.338 237.393 231.517 237.058 231.517 Z"
                    style={{}}
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-32">
            <h3 className="mt-1 text-gray-400 truncate">{name}</h3>
            <div className="text-sm text-gray-400 mb-2">
              <h3 className="truncate">{artists[0].name}</h3>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CardSong;
