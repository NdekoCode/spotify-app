import React, { useEffect, useState } from 'react';
import CardDetails from './CardDetails';
import MusicContext from '../data/AppContext';
import useFetch from '../data/hookFunc';
import SkeletonData from './SkeletonData';

function AlbumsData() {
  const urlAlbums = `https://api.spotify.com/v1/browse/new-releases`;
  const [albums, setAlbums] = useState({});
  const {
    dataSongs,
    setDataSong,
    searchUser,
    newAlbums,
    isLoading,
    setting,
    setIsLoading,
  } = MusicContext();
  const [albumsData, albumsLoading] = useFetch(
    urlAlbums,
    newAlbums,
    setting.authorize_token,
    isLoading
  );
  useEffect(() => {
    setIsLoading(albumsLoading);

    if (searchUser.length > 1) {
      // eslint-disable-next-line no-shadow
      const { albums } = dataSongs;
      if (albums !== undefined) {
        setAlbums(albums.items);
        setDataSong((d) => ({ ...d, albums }));
      }
    } else {
      setAlbums(albumsData.albums);
      setDataSong((d) => ({ ...d, albums: albumsData.albums }));
    }
  }, [searchUser, dataSongs.albums, albumsData.albums]);

  if (!isLoading && albums !== undefined && Object.keys(albums).length > 0) {
    const { items } = albums;
    if (items !== undefined) {
      return (
        <main className="grid place-items-center mt-5 p-5">
          <div>
            <h2 className="text-2xl heading text-center sm:text-left my-3 ">
              Suggest Albums of all time
            </h2>
            <section className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 gap-4">
              {items.map((album, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <CardDetails album={album} key={key} />
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
            {albums.map((album, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <CardDetails album={album} key={index} />
            ))}
          </section>
        </div>
      </main>
    );
  }
  return <SkeletonData />;
}

export default AlbumsData;
