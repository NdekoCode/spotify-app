import React from "react";
import MusicApp from "../components/MusicApp";
import MusicContext from "../data/AppContext";
import "../assets/css/components/card.css";
import CardTrack from "../components/CardTrack";

const Tracks = () => {
  const { dataSongs } = MusicContext();
  const { tracks } = dataSongs;
  return (
    <MusicApp>
      <h2 className="title mx-5 text-4xl text-gray-800 font-black">
        Suggest Tracks
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  p-5">
        {tracks.items.map((track, index) => (
          <CardTrack key={index} track={track} />
        ))}
      </section>
    </MusicApp>
  );
};

export default Tracks;
