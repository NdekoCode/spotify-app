import { useEffect, useState } from "react";
import AlbumsData from "../components/AlbumsData";
import MusicApp from "../components/MusicApp";
import MusicContext from "../data/AppContext";
import useFetch from "../data/hookFunc";

const Albums = () => {
  const urlAlbums = `https://api.spotify.com/v1/browse/new-releases`;
  const [albums, setAlbums] = useState({});
  const { dataSongs, newAlbums, setDataSong, setting } = MusicContext();
  const [albumsData, albumsLoading] = useFetch(
    urlAlbums,
    newAlbums,
    setting.authorize_token
  );
  setDataSong(albumsData);
  useEffect(() => {
    setAlbums(albumsData.albums);
    setAlbums;
  }, [albums, dataSongs, albumsData.albums]);
  if (!albumsLoading || albums !== undefined) {
    const { items } = albums;
    console.log(items);
    return (
      <MusicApp>
        <AlbumsData albumItems={items} />
      </MusicApp>
    );
  }

  return <MusicApp>Veuiller recharger pour avoir les données</MusicApp>;
};

export default Albums;
