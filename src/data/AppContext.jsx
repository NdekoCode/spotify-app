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
  const [searchUser, setSearchUser] = useState("Fally");
  const [newAlbums, setNewAlbums] = useState({});
  const [newTracks, setNewTracks] = useState({});
  const [newArtists, setNewArtists] = useState({});
  const [newPlaylists, setNewPlaylists] = useState({});
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
    newAlbums,
    setNewAlbums,
    newTracks,
    setNewTracks,
    newArtists,
    setNewArtists,
    newPlaylists,
    setNewPlaylists,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
});
const MusicContext = () => useContext(AppContext);
export default MusicContext;
