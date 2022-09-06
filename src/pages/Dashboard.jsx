import { useEffect } from "react";
import "../assets/css/App.css";
import ModalPlayer from "../components/ModalPlayer";
import Musics from "../components/Musics";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MusicContext from "../data/AppContext";
import useFetch from "../data/hookFunc";
import { CLIENT_ID, CLIENT_SECRET } from "../data/secureData";

export default function Dashboard() {
  const {
    setting,
    setSetting,
    idSong,
    searchUser,
    isLoading,
    dataSongs,
    showFrame,
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
    <>
      <ModalPlayer id={idSong} visibility={showFrame} />
      <main>
        <div className="main-navigation">
          <Sidebar />
          <div className="content">
            <Navbar />
            <Musics dataSongs={data} />
          </div>
        </div>
      </main>
    </>
  );
}
