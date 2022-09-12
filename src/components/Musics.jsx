import MusicContext from '../data/AppContext';
import AlbumsData from './AlbumsData';
import CardTracksContainer from './CardTracksContainer';
import TrackData from './TrackData';
// import TrackData from "./TrackDataTable";

const Musics = () => {
  const { searchUser } = MusicContext();

  return (
    <div className="grid place-items-center mt-5 bg-app ">
      {searchUser.length < 1 && (
        <div className="mt-10">
          <h2 className="text-2xl heading text-center sm:text-left ">
            Artists you must love the most
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-2">
            <a
              className="bg-gradient-to-b from-gray-900 to-black mr-3 md:mr-6 mt-4 w-36 md:w-40 h-44 flex justify-center items-center text-gray-500 hover:text-gray-200 rounded"
              href="/artists"
            >
              <h2>See More</h2>
            </a>
          </div>
        </div>
      )}
      <div className="mt-10">
        <h2 className="text-2xl heading text-center sm:text-left ">
          Your most favourite tracks of all time
        </h2>
        <CardTracksContainer>
          <TrackData />
        </CardTracksContainer>
      </div>

      <AlbumsData />
    </div>
  );
};

export default Musics;
