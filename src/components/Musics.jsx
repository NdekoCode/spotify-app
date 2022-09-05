import React, { useContext } from "react";
import MusicContext from "../data/MusicContext";
import CardArtist from "./CardArtist";
import CardDetails from "./CardDetails";
import CardSong from "./CardSong";

const Musics = () => {
  const { data } = useContext(MusicContext);
  if (data !== null) {
    const { albums, artists, playlists, tracks } = data;

    if (tracks !== null && tracks !== undefined) {
      const { items } = tracks;
      const albumItems = albums.items;
      return (
        <main className="grid place-items-center mt-5 p-5">
          <div>
            <h2 className="title text-4xl text-gray-800 font-black">
              To get you started
            </h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {items.map(
                (
                  { album, artists, duration_ms, external_urls, name },
                  index
                ) => (
                  <CardSong
                    key={index}
                    album={album}
                    name={name}
                    artists={artists}
                  />
                )
              )}
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-4">
              {albumItems.map(
                ({ artists, images, total_tracks, release_date }, index) => (
                  <CardDetails
                    artists={artists}
                    images={images}
                    total_tracks={total_tracks}
                    release_date={release_date}
                    key={index}
                  />
                )
              )}
            </section>
          </div>
        </main>
      );
    }
  }
  return <div>Problème de connexion</div>;
};

export default Musics;
