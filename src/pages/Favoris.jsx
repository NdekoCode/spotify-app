import React from "react";
import ModalPlayer from "../components/ModalPlayer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MusicContext from "../data/AppContext";

const Favoris = () => {
  const { idSong, showFrame } = MusicContext();
  return (
    <>
      <ModalPlayer id={idSong} visibility={showFrame} />
      <main>
        <div className="main-navigation">
          <Sidebar />
          <div className="content">
            <Navbar />
          </div>
        </div>
      </main>
    </>
  );
};

export default Favoris;
