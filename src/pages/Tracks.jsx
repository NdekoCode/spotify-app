import React from "react";
import MusicApp from "../components/MusicApp";
import MusicContext from "../data/AppContext";
import "../assets/css/components/card.css";
import CardTrack from "../components/CardTrack";

const Tracks = () => {
  const { dataSongs } = MusicContext();
  console.log(dataSongs);
  const { tracks } = dataSongs;
  return (
    <MusicApp>
      {tracks.items.map((track, index) => (
        <CardTrack track={track} />
      ))}
    </MusicApp>
  );
};

export default Tracks;
