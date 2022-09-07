import AlbumsData from "../components/AlbumsData";
import MusicApp from "../components/MusicApp";
import MusicContext from "../data/AppContext";

const Albums = () => {
  const { dataSongs } = MusicContext();
  const { albums } = dataSongs;
  let albumItems = albums.items;
  return (
    <MusicApp>
      <AlbumsData albumItems={albumItems} />
    </MusicApp>
  );
};

export default Albums;
