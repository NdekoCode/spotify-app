import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/custom.css";
import routes from "./routes/routes";
import MusicContext from "./data/AppContext";
import useFetch from "./data/hookFunc";
import { CLIENT_ID, CLIENT_SECRET } from "./data/secureData";

function App() {
  const [state, setState] = useState({
    artists: {},
    albums: {},
    tracks: {},
    playlists: {},
  });
  const idArtist = [
    "4OBJLual30L7gRl5UkeRcT",
    "2dIgFjalVxs4ThymZ67YCE",
    "5VO5GFUAOEURtWW9oWvbcV",
    "0is7KJiz3t87LiJWUO1tNI",
    "0GOx72r5AAEKRGQFn3xqXK",
    "6IflU2YrY5Cyw7YoBICosV",
    "4bSBGQWUDeonXg7P4ys0CM",
    "4sbXXFzEWJY2zsZjelerjX",
    "20M8IJbzy7Y5EBRfwDIUmb",
    "3qfrrrSO7utFdJkM2tvMRb",
    "7x3eTVPlBiPjXHn3qotY86",
    "7xNYY1Zkb1vks5m9ATlJok",
  ];
  let searchArtist = idArtist.slice(0, 1).join(",");
  const urlTracks = `https://api.spotify.com/v1/recommendations?seed_artists=${searchArtist}&seed_genres=classic,country&seed_tracks=6CO4WFWJGcaU5IByGLUYUj,13BVU634EX7PqtRoKj0ZWZ&limit=15`;
  const urlArtists = `https://api.spotify.com/v1/artists?ids=${idArtist.join(
    ","
  )}`;
  const urlPlaylist = "https://api.spotify.com/v1/browse/featured-playlists";
  const urlAlbums = `https://api.spotify.com/v1/browse/new-releases`;
  const {
    setting,
    setSetting,
    searchUser,
    isLoading,
    dataSongs,
    setDataSong,
    setIsLoading,
    newAlbums,
    setNewAlbums,
    newTracks,
    setNewTracks,
    newArtists,
    setNewArtists,
    newPlaylists,
    setNewPlaylists,
  } = MusicContext();
  let loading = true;
  useEffect(() => {
    (async () => {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          // Considerer comme un formulaire HTMK
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      });
      const responseData = await response.json();
      const { access_token, token_type } = responseData;
      setSetting((setting) => ({
        ...setting,
        token: access_token,
        authorize_token: `${token_type} ${access_token}`,
      }));
    })();
  }, [setSetting]);

  // const url = `https://api.spotify.com/v1/search?q=${searchUser}&type=album,track,artist,playlist,show,episode&include_external=audio?limit=15`;
  const [albumsData, albumsLoading] = useFetch(
    urlAlbums,
    newAlbums,
    setting.authorize_token
  );
  loading = albumsLoading;
  setNewAlbums(albumsData);
  const [tracksData, tracksLoading] = useFetch(
    urlTracks,
    newTracks,
    setting.authorize_token,
    isLoading
  );
  setNewTracks(tracksData);
  loading = tracksLoading;
  const [artistsData, artistsLoading] = useFetch(
    urlArtists,
    newArtists,
    setting.authorize_token,
    isLoading
  );
  setNewArtists(artistsData);

  loading = artistsLoading;
  const [playlistsData, playlistsLoading] = useFetch(
    urlPlaylist,
    newPlaylists,
    setting.authorize_token,
    isLoading
  );
  setNewPlaylists(playlistsData);

  loading = playlistsLoading;
  useEffect(() => {
    console.log(newTracks);
    setState({
      tracks: newTracks?.tracks,
      artists: newArtists?.artists,
      albums: newAlbums?.albums,
      playlists: newPlaylists?.playlists,
    });
    setIsLoading(loading);
  }, [
    newTracks?.tracks,
    newArtists?.artists,
    newAlbums?.albums,
    newPlaylists?.playlists,
  ]);
  console.log(state);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} exact path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
