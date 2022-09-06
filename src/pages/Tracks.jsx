import React from "react";
import MusicContext from "../data/AppContext";

const Tracks = () => {
  const { idSong, showFrame } = MusicContext();
  return <div>Tracks</div>;
};

export default Tracks;
