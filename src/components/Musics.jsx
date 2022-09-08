import MusicContext from "../data/AppContext";
import AlbumsData from "./AlbumsData";
import CardSong from "./CardSong";

const Musics = () => {
  const { dataSongs } = MusicContext();
  if (dataSongs !== null) {
    const { albums, artists, playlists, tracks } = dataSongs;

    if (tracks !== undefined && Object.keys(tracks).length > 0) {
      let { items } = tracks;
      return (
        <main className="grid place-items-center mt-5 p-5">
          <div>
            <h2 className="title text-4xl text-gray-800 font-black">
              To get you started
            </h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {items.map((song, index) => (
                <CardSong song={song} key={index} />
              ))}
            </section>
            <AlbumsData />
            {/* <section className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 gap-4">
              {albumItems.map(
                (
                  { artists, images, name, total_tracks, release_date },
                  index
                ) => (
                  <CardDetails
                    artists={artists}
                    name={catString(name)}
                    images={images}
                    total_tracks={total_tracks}
                    release_date={release_date}
                    key={index}
                  />
                )
              )}
            </section> */}
          </div>
        </main>
      );
    }
  }
  return <div>Problème de connexion</div>;
};

export default Musics;
