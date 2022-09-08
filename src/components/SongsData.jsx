import React, { useEffect, useState } from "react";
import MusicContext from "../data/AppContext";
import { idArtist } from "../data/getData";
import useFetch from "../data/hookFunc";
import CardTrack from "./CardTrack";
import SkeletonData from "./SkeletonData";

const SongsData = () => {
  let searchArtist = idArtist.slice(0, 1).join(",");

  const urlTracks = `https://api.spotify.com/v1/recommendations?seed_artists=${searchArtist}&seed_genres=classic,country&seed_tracks=6CO4WFWJGcaU5IByGLUYUj,13BVU634EX7PqtRoKj0ZWZ&limit=15`;
  const [tracks, setTracks] = useState({});
  const {
    dataSongs,
    setDataSong,
    searchUser,
    newTracks,
    isLoading,
    setting,
    setIsLoading,
  } = MusicContext();
  const [tracksData, tracksLoading] = useFetch(
    urlTracks,
    newTracks,
    setting.authorize_token,
    isLoading
  );
  useEffect(() => {
    setIsLoading(tracksLoading);
    if (searchUser.length > 1) {
      let { tracks } = dataSongs;
      if (tracks !== undefined) {
        setTracks(tracks.items);
        setDataSong((d) => ({ ...d, tracks }));
      }
    } else {
      setTracks(tracksData.tracks);
      setDataSong((d) => ({ ...d, tracks: tracksData.tracks }));
      // console.log("No search", tracks);
    }
  }, [searchUser, dataSongs.tracks, tracksData.tracks]);

  if (!isLoading && tracks !== undefined && Object.keys(tracks).length > 0) {
    return (
      <>
        <h2 className="text-2xl heading text-center sm:text-left ">
          Your most favourite tracks of all time
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  p-5">
          {tracks.map((track, index) => (
            <CardTrack key={index} track={track} />
          ))}
        </section>
      </>
    );
  }
  return <SkeletonData />;
};

export default SongsData;
