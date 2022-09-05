import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CLIENT_ID, CLIENT_SECRET } from "./data/secureData";
import "./assets/css/App.css";
import "./assets/css/custom.css";
import useFetch from "./data/hookFunc";
import routes from "./routes/routes";
import MusicContext from "./data/AppContext";

function App() {
  const [setting, setSetting] = useState({
    main_url: "https://api.spotify.com/v1",
    token: "",
    authorize_token: "",
  });

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

  const { searchUser, dataSongs, setDataSong, setIsLoading } = MusicContext();
  const url = `https://api.spotify.com/v1/search?q=${searchUser}&type=album,track,artist,playlist,show,episode&include_external=audio`;
  const [data, loading] = useFetch(url, dataSongs, setting.authorize_token);
  setDataSong(data);
  setIsLoading(loading);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
