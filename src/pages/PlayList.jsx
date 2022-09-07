import React from "react";
import MusicApp from "../components/MusicApp";
import MusicContext from "../data/AppContext";

const PlayList = () => {
  const { dataSongs } = MusicContext();
  const { playlists } = dataSongs;
  console.log(dataSongs);
  return <MusicApp>Je suis les playlist</MusicApp>;
};

export default PlayList;
