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
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {tracks.items.map((track, index) => (
          <CardTrack key={index} track={track} />
        ))}
      </section>
    </MusicApp>
  );
};

export default Tracks;
