import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/custom.css";
import routes from "./routes/routes";
import MusicContext from "./data/AppContext";
import useFetch from "./data/hookFunc";
import { CLIENT_ID, CLIENT_SECRET } from "./data/secureData";

function App() {
  const {
    setting,
    setSetting,
    searchUser,
    isLoading,
    dataSongs,
    setDataSong,
    setIsLoading,
  } = MusicContext();
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

  const url = `https://api.spotify.com/v1/search?q=${searchUser}&type=album,track,artist,playlist,show,episode&include_external=audio?limit=15`;
  const [data, loading] = useFetch(
    url,
    dataSongs,
    setting.authorize_token,
    isLoading
  );
  setDataSong(data);
  setIsLoading(loading);

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
