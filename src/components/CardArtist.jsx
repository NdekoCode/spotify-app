import React, { useCallback } from "react";
import MusicContext from "../data/AppContext";

const CardArtist = ({ artist }) => {
  const { followers, id, images, name, popularity, type } = artist;
  const { handleFrame, setTypePlay, setShowFrame, setIdSong } = MusicContext();
  const showPlayer = useCallback(() => {
    setIdSong(id);
    setTypePlay(type);
    handleFrame();
    setShowFrame(true);
  });
  const image = images[0];
  return (
    <>
      <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
        <div className="relative mb-6">
          {JSON.stringify(image)}
          <img
            className="w-full object-cover"
            height={image?.height}
            src={image?.url}
            alt="Profile picture"
          />
          <div
            className="text-center absolute w-full"
            style={{ bottom: "-30px" }}
          >
            <div className="mb-10">
              <p className="text-white tracking-wide uppercase text-lg font-bold">
                {name}
              </p>
            </div>
            <button
              onClick={showPlayer}
              className="btn-m p-4 rounded-full transition ease-in duration-200 focus:outline-none"
            >
              <svg
                viewBox="0 0 20 20"
                enableBackground="new 0 0 20 20"
                className="w-6 h-6"
              >
                <path
                  fill="#FFFFFF"
                  d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                 C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                 C15.952,9,16,9.447,16,10z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="py-10 px-6 text-center tracking-wide grid grid-cols-2 gap-6">
          <div className="followers">
            <p className="text-lg">{followers.total}</p>
            <p className="text-gray-400 text-sm">Followers</p>
          </div>
          <div className="following">
            <p className="text-lg">{popularity}</p>
            <p className="text-gray-400 text-sm">Popularity</p>
          </div>
        </div>
      </div>
      {JSON.stringify()}
    </>
  );
};

export default CardArtist;
