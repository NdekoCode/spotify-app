import { createContext, memo, useContext, useMemo, useState } from "react";

const AppContext = createContext();
export const ContextProvider = memo(({ children }) => {
  const [setting, setSetting] = useState({
    main_url: "https://api.spotify.com/v1",
    token: "",
    authorize_token: "",
  });
  const [userData, setUserData] = useState({});
  const [typePlay, setTypePlay] = useState({});
  const [menu, toggleMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [idSong, setIdSong] = useState("");
  const [showFrame, setShowFrame] = useState(false);
  const handleFrame = () => {
    setShowFrame(!showFrame);
  };
  const artistSearch = [
    "T.I",
    "Fally",
    "Ferre Gola",
    "Shako",
    "Fouine",
    "Chris Brown",
    "RND",
  ];
  const index = parseInt(Math.random() * (artistSearch.length - 1));
  let search = artistSearch[index];
  console.log(index, search);
  const [searchUser, setSearchUser] = useState(search || "Stray Dogs");
  const [dataSongs, setDataSong] = useState({
    artists: {},
    albums: {},
    tracks: {},
    playlists: {},
  });
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
    typePlay,
    setTypePlay,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
});
const MusicContext = () => useContext(AppContext);
export default MusicContext;
