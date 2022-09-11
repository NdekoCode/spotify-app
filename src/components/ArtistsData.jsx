import React, { useEffect, useState } from 'react';
import MusicContext from '../data/AppContext';
import useFetch from '../data/hookFunc';
import { idArtist } from '../data/getData';
import CardArtist from './CardArtist';
import SkeletonData from './SkeletonData';

function ArtistsData() {
  const urlArtists = `https://api.spotify.com/v1/artists?ids=${idArtist.join(
    ',',
  )}`;
  const [artists, setArtists] = useState({});
  const {
    dataSongs,
    setDataSong,
    searchUser,
    newArtists,
    isLoading,
    setting,
    setIsLoading,
  } = MusicContext();
  const [artistsData, artistsLoading] = useFetch(
    urlArtists,
    newArtists,
    setting.authorize_token,
    isLoading,
  );
  useEffect(() => {
    setIsLoading(artistsLoading);

    if (searchUser.length > 1) {
      // eslint-disable-next-line no-shadow
      const { artists } = dataSongs;
      if (artists !== undefined) {
        setArtists(artists.items);
        setDataSong((d) => ({ ...d, artists }));
      }
    } else {
      // eslint-disable-next-line no-shadow
      const { artists } = artistsData;
      setArtists(artists);
      setDataSong((d) => ({ ...d, artists }));
    }
  }, [searchUser, dataSongs.artists, artistsData.artists]);

  if (!isLoading && artists !== undefined && Object.keys(artists).length > 0) {
    const { items } = artists;
    if (items === undefined) {
      return (
        <div className="w-full grid place-items-center mt-5">
          <h2 className="text-2xl heading text-center sm:text-left ">
            Suggest{' '}
            <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              {searchUser}
            </span>{' '}
            Artists
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {artists.map((artist, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <CardArtist key={index} artist={artist} />
            ))}
          </section>
        </div>
      );
    }
    return (
      <div className="grid place-items-center mt-5">
        <h2 className="title text-4xl text-gray-800 font-black">
          Suggest{' '}
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            {searchUser}
          </span>{' '}
          of all time Artists
        </h2>
        <section className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 gap-4">
          {items.map((artist, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CardArtist key={index} artist={artist} />
          ))}
        </section>
      </div>
    );
  }

  return <SkeletonData />;
}

export default ArtistsData;
