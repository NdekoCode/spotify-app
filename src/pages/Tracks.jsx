import React from "react";
import "../assets/css/components/card.css";
import MusicApp from "../components/MusicApp";
import SongsData from "../components/SongsData";

const Tracks = () => {
  return (
    <MusicApp>
      <SongsData />
    </MusicApp>
  );
};

export default Tracks;
