import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [idSong, setIdSong] = useState("");
  const [showFrame, setShowFrame] = useState(false);
  const handleFrame = () => {
    setShowFrame(!showFrame);
  };
  const [searchUser, setSearchUser] = useState("T.I");
  const [dataSongs, setDataSong] = useState({
    artists: {},
    albums: {},
    tracks: {},
    playlists: {},
  });

  console.log("render func");
  const value = {
    userData,
    setUserData,
    isLoading,
    setIsLoading,
    showFrame,
    setShowFrame,
    handleFrame,
    idSong,
    setIdSong,
    dataSongs,
    setDataSong,
    searchUser,
    setSearchUser,
  };
  console.log(value);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
const MusicContext = () => useContext(AppContext);
export default MusicContext;
