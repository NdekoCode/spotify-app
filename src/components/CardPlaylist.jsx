import React, { useCallback } from "react";
import MusicContext from "../data/AppContext";
import artistImg from "../assets/img/artist.jpeg";

const CardPlaylist = ({ playlist }) => {
  const { description, href, id, images, name, owner, type } = playlist;
  const { handleFrame, setTypePlay, setShowFrame, setIdSong } = MusicContext();
  const showPlayer = useCallback((evt) => {
    evt.preventDefault();
    setIdSong(id);
    setTypePlay(type);
    handleFrame();
    setShowFrame(true);
  });
  const [image] = images;
  return (
    <a
      className="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-full sm:w-60 md:w-64 lg:w-52 group"
      href={href}
      onClick={showPlayer}
    >
      {/* Image Cover */}
      <img
        src={image?.url.includes("mosaic") ? artistImg : image?.url}
        className="w-full rounded shadow"
      />
      {/* Title */}
      <h3 className="text-gray-200 font-bold mt-5"> {name}</h3>
      {/* Description */}
      <p className="text-gray-400 font-light mt-2 text-xs">{description}</p>
      <p className="text-gray-200 mt-2">
        Créer par :
        <strong className=" font-medium "> {owner.display_name}</strong>
      </p>
    </a>
  );
};

export default CardPlaylist;
