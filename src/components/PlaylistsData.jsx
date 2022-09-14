import React, { useEffect, useState } from 'react';
import MusicContext from '../data/AppContext';
import useFetch from '../data/hookFunc';
import CardPlaylist from './CardPlaylist';
import SkeletonData from './SkeletonData';

const PlaylistsData = () => {
  const urlPlaylist = 'https://api.spotify.com/v1/browse/featured-playlists';
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
    isLoading,
  );
  useEffect(() => {
    setIsLoading(playlistsLoading);

    if (searchUser.length > 1) {
      let { playlists } = dataSongs;
      if (playlists !== undefined) {
        setPlaylists(playlists.items);
        setDataSong((d) => ({ ...d, playlists }));
      }
    } else {
      setPlaylists(playlistsData.playlists);
      setDataSong((d) => ({ ...d, playlists: playlistsData.playlists }));
    }
  }, [searchUser, dataSongs.playlists, playlistsData.playlists]);

  if (
    !isLoading &&
    playlists !== undefined &&
    Object.keys(playlists).length > 0
  ) {
    const { items } = playlists;
    if (items !== undefined) {
      return (
        <div className="w-full grid place-items-center mt-5">
          <h2 className="text-2xl heading text-center sm:text-left my-3 ">
            Suggest Playlists of all time
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {items.map((playlist, index) => (
              <CardPlaylist playlist={playlist} key={index} />
            ))}
          </section>
        </div>
      );
    }

    return (
      <div className="w-full grid place-items-center mt-5">
        <h2 className="text-2xl heading text-center sm:text-left my-3 ">
          Suggest{' '}
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            {searchUser}
          </span>{' '}
          Playlists of all time
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 cards lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {playlists.map((playlist, index) => (
            <CardPlaylist playlist={playlist} key={index} />
          ))}
        </section>
      </div>
    );
  }

  return <SkeletonData />;
};

export default PlaylistsData;
