import { createContext, memo, useContext, useState } from "react";

const AppContext = createContext();
export const ContextProvider = memo(({ children }) => {
  const [setting, setSetting] = useState({
    main_url: "https://api.spotify.com/v1",
    token: "",
    authorize_token: "",
  });
  const [userData, setUserData] = useState({});
  const [menu, toggleMenu] = useState(false);
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
  console.log("hey");
  const value = {
    setting,
    setSetting,
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
    menu,
    toggleMenu,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
});
const MusicContext = () => useContext(AppContext);
export default MusicContext;
