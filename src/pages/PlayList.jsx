import React from "react";
import CardPlaylist from "../components/CardPlaylist";
import MusicApp from "../components/MusicApp";
import MusicContext from "../data/AppContext";

const PlayList = () => {
  const { dataSongs } = MusicContext();
  const { playlists } = dataSongs;
  if (playlists !== undefined) {
    return (
      <MusicApp>
        <h2 className="title mx-5 text-4xl text-gray-800 font-black">
          Suggest Tracks
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  p-5">
          {playlists.items.map((item, index) => (
            <CardPlaylist playlist={item} key={index} />
          ))}
        </section>
      </MusicApp>
    );
  }
  return (
    <MusicApp>
      <h2 className="title mx-5 text-4xl text-gray-800 font-black">
        Erreur lors de la récuperations des donnéess
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  p-5">
        <p>Veuiller réessayer votre recherche</p>
      </section>
    </MusicApp>
  );
};

export default PlayList;
