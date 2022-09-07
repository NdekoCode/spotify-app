import React from "react";
import CardArtist from "../components/CardArtist";
import MusicApp from "../components/MusicApp";
import MusicContext from "../data/AppContext";

const Artists = () => {
  const { dataSongs } = MusicContext();
  const { artists } = dataSongs;
  return (
    <MusicApp>
      <h2 className="title mx-5 text-4xl text-gray-800 font-black">
        Suggest Artist
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4  p-5">
        {artists.items.map((artist, index) => (
          <CardArtist key={index} artist={artist} />
        ))}
      </section>
    </MusicApp>
  );
};

export default Artists;
