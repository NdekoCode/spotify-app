import React, { useEffect, useState } from "react";
import CardDetails from "./CardDetails";
import MusicContext from "../data/AppContext";
import useFetch from "../data/hookFunc";

const AlbumsData = () => {
  const urlAlbums = `https://api.spotify.com/v1/browse/new-releases`;
  const [albums, setAlbums] = useState({});
  const { dataSongs, searchUser, newAlbums, setDataSong, setting } =
    MusicContext();
  const [albumsData, albumsLoading] = useFetch(
    urlAlbums,
    newAlbums,
    setting.authorize_token
  );
  useEffect(() => {
    if (searchUser.length > 0) {
      const { albums } = dataSongs;
      setAlbums(albums);
    } else {
      setAlbums(albumsData.albums);
      setDataSong((d) => ({ ...d, albums: albumsData.albums }));
    }
  }, [searchUser, albumsData.albums]);

  if (
    !albumsLoading ||
    (albums !== undefined && Object.keys(albums).length > 0)
  ) {
    console.log(albums);
    const { items } = albums;

    return (
      <main className="grid place-items-center mt-5 p-5">
        <div>
          <h2 className="title text-4xl text-gray-800 font-black">
            Suggest Albums
          </h2>
          <section className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 gap-4">
            {items.map((album, index) => (
              <CardDetails album={album} key={index} />
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
          Suggest Albums
        </h2>
        <section className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 gap-4">
          Veuillez recharger la page
        </section>
      </div>
    </main>
  );
};

export default AlbumsData;
