import React, { useEffect, useState } from "react";
import CardDetails from "./CardDetails";
import MusicContext from "../data/AppContext";
import useFetch from "../data/hookFunc";
import CardPlaylist from "./CardPlaylist";

const PlaylistsData = () => {
  const urlPlaylist = "https://api.spotify.com/v1/browse/featured-playlists";
  const [playlists, setPlaylists] = useState({});
  const {
    dataSongs,
    setDataSong,
    searchUser,
    newPlaylists,
    isLoading,
    setting,
    setIsLoading,
  } = MusicContext();
  const [playlistsData, playlistsLoading] = useFetch(
    urlPlaylist,
    newPlaylists,
    setting.authorize_token,
    isLoading
  );
  useEffect(() => {
    setIsLoading(playlistsLoading);

    if (searchUser.length > 1) {
      let { playlists } = dataSongs;
      if (playlists !== undefined) {
        setPlaylists(playlists.items);
        setDataSong((d) => ({ ...d, playlists }));
        console.log("DOnnées avec la recherche", playlists);
      }
    } else {
      setPlaylists(playlistsData.playlists);
      setDataSong((d) => ({ ...d, playlists: playlistsData.playlists }));
      console.log("DOnnées sans search", playlists);
    }
  }, [searchUser, dataSongs.playlists, playlistsData.playlists]);

  if (
    !isLoading &&
    playlists !== undefined &&
    Object.keys(playlists).length > 0
  ) {
    console.log("Data loaded ", playlists);
    const { items } = playlists;
    if (items !== undefined) {
      return (
        <main className="grid place-items-center mt-5 p-5">
          <div>
            <h2 className="text-2xl heading text-center sm:text-left my-3 ">
              Suggest Playlists of all time
            </h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  p-5">
              {items.map((playlist, index) => (
                <CardPlaylist playlist={playlist} key={index} />
              ))}
            </section>
          </div>
        </main>
      );
    }

    return (
      <main className="grid place-items-center mt-5 p-5">
        <div>
          <h2 className="title text-4xl text-gray-800 font-black">
            Suggest Playlists
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  p-5">
            {playlists.map((playlist, index) => (
              <CardPlaylist playlist={playlist} key={index} />
            ))}
          </section>
        </div>
      </main>
    );
  }
  return (
    <main className="grid place-items-center mt-5 p-5">
      <div>
        <h2 className="title text-4xl text-gray-800 font-black">
          Suggest Playlists
        </h2>
        <section className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 gap-4">
          Veuillez recharger la page
        </section>
      </div>
    </main>
  );
};

export default PlaylistsData;
