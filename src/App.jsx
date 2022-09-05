import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/custom.css";
import Home from "./pages/Home";
import MusicContext from "./data/MusicContext";
import routes from "./routes/routes";

function App() {
  const CLIENT_ID = "068fc5eedfa7413d85570a55dbfafcbf";
  const CLIENT_SECRET = "1bbcd11145d84bbd8899c7cfce51ae68";
  const urlParams = "offset=20&limit=20";

  const [state, setState] = useState({
    main_url: "https://api.spotify.com/v1",
    data: null,
    token: "",
    authorize_token: "",
  });
  const value = {
    data: state.data,
    setData: setState,
  };

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
      setState((state) => ({
        ...state,
        token: access_token,
        authorize_token: `${token_type} ${access_token}`,
      }));
      const responseSearch = await fetch(
        "https://api.spotify.com/v1/search?q=Fally&type=album,track,artist,playlist,show,episode&include_external=audio",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: state.authorize_token,
          },
        }
      );
      const searchData = await responseSearch.json();
      setState((state) => ({ ...state, data: searchData }));
    })();
  }, [setState]);
  return (
    <MusicContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </MusicContext.Provider>
  );
}

export default App;
