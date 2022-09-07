import React, { memo } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MusicContext from "../data/AppContext";
import ModalPlayer from "./ModalPlayer";
import UserData from "./UserData";
import GreetUser from "./GreetUser";
import CardTracksContainer from "./CardTracksContainer";
import TrackData from "./TrackData";

const MusicApp = memo(({ children }) => {
  const { idSong, showFrame, typePlay } = MusicContext();
  return (
    <>
      <ModalPlayer id={idSong} visibility={showFrame} type={typePlay} />

      <div className="App">
        <Sidebar />
        <div className="px-8 lg:ml-48 lg:px-20 lg:py-6 bg-black text-gray-100 min-h-screen overflow-hidden">
          <div className="flex flex-col">
            <UserData />
            <main className="py-8 md:pb-12">
              <div className="py-10">
                <GreetUser />
              </div>
              <div className="mt-10 md:mt-24">
                <h2 className="text-2xl heading text-center sm:text-left ">
                  Artists you must love the most
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-2">
                  <a
                    className="bg-gradient-to-b from-gray-900 to-black mr-3 md:mr-6 mt-4 w-36 md:w-40 h-44 flex justify-center items-center text-gray-500 hover:text-gray-200 rounded"
                    href="/artist"
                  >
                    <h2>See More</h2>
                  </a>
                </div>
              </div>
              <div className="mt-10 md:mt-20">
                <h2 className="text-2xl heading text-center sm:text-left ">
                  Your most favourite tracks of all time
                </h2>
                <CardTracksContainer />
              </div>
              <div className="mt-10 md:mt-20 w-centerull sm:justify-start">
                <h2 className="text-2xl heading text-center sm:text-left ">
                  Recently played tracks
                </h2>
                <TrackData />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
});

export default MusicApp;
