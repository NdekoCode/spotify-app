import React, { useEffect, useState } from "react";
import MusicContext from "../data/AppContext";
import useFetch from "../data/hookFunc";
import { idArtist } from "../data/getData";
import CardArtist from "./CardArtist";
import SkeletonData from "./SkeletonData";

const ArtistsData = () => {
  const urlArtists = `https://api.spotify.com/v1/artists?ids=${idArtist.join(
    ","
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
    isLoading
  );
  useEffect(() => {
    setIsLoading(artistsLoading);

    if (searchUser.length > 1) {
      let { artists } = dataSongs;
      if (artists !== undefined) {
        setArtists(artists.items);
        setDataSong((d) => ({ ...d, artists }));
        console.log("DOnnées avec la recherche", artists);
      }
    } else {
      let { artists } = artistsData;
      setArtists(artists);
      setDataSong((d) => ({ ...d, artists }));
      console.log("DOnnées sans search", artists);
    }
  }, [searchUser, dataSongs.artists, artistsData.artists]);

  if (!isLoading && artists !== undefined && Object.keys(artists).length > 0) {
    console.log("Data loaded ", artists);
    const { items } = artists;
    if (items === undefined) {
      return (
        <main className="grid place-items-center mt-5 p-5">
          <div>
            <h2 className="text-2xl heading text-center sm:text-left ">
              Suggest Artists
            </h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4  p-5">
              {artists.map((artist, index) => (
                <CardArtist key={index} artist={artist} />
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
            Suggest Artists
          </h2>
          <section className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 gap-4">
            {items.map((artist, index) => (
              <CardArtist key={index} artist={artist} />
            ))}
          </section>
        </div>
      </main>
    );
  }

  return <SkeletonData />;
};

export default ArtistsData;
