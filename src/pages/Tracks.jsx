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
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
        {tracks.items.map((track, index) => (
          <CardTrack key={index} track={track} />
        ))}
      </section>
    </MusicApp>
  );
};

export default Tracks;
