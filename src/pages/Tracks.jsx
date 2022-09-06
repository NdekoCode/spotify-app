import React from "react";
import MusicApp from "../components/MusicApp";
import MusicContext from "../data/AppContext";
import "../assets/css/components/card.css";
import CardTrack from "../components/CardTrack";

const Tracks = () => {
  const { dataSongs } = MusicContext();
  const { tracks } = dataSongs;
  console.log(tracks);
  return (
    <MusicApp>
      <CardTrack />
    </MusicApp>
  );
};

export default Tracks;
