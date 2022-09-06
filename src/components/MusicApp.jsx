import React, { memo } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MusicContext from "../data/AppContext";
import ModalPlayer from "./ModalPlayer";

const MusicApp = memo(({ children }) => {
  console.log("render music app");
  const { idSong, showFrame, typePlay } = MusicContext();
  return (
    <>
      <ModalPlayer id={idSong} visibility={showFrame} type={typePlay} />
      <main>
        <div className="main-navigation">
          <Sidebar />
          <div className="content">
            <Navbar />
            {children}
          </div>
        </div>
      </main>
    </>
  );
});

export default MusicApp;
