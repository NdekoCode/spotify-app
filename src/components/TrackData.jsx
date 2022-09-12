import React, { useEffect, useState } from 'react';
import MusicContext from '../data/AppContext';
import { idArtist } from '../data/getData';
import useFetch from '../data/hookFunc';
import CardSong from './CardSong';
import SkeletonData from './SkeletonData';

const TrackData = () => {
  let searchArtist = idArtist.slice(0, 1).join(',');

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
    isLoading,
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
        {tracks.map((song, index) => (
          <CardSong song={song} key={index} />
        ))}
      </>
    );
  }
  return <SkeletonData parent={false} />;
};

export default TrackData;
