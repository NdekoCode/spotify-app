import "../assets/css/App.css";
import Musics from "../components/Musics";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MusicContext from "../data/AppContext";
import useFetch from "../data/hookFunc";

export default function Home() {
  console.log("render");
  const { searchUser } = MusicContext();
  const url = `https://api.spotify.com/v1/search?q=${searchUser}&type=album,track,artist,playlist,show,episode&include_external=audio`;
  const [data] = useFetch(url);

  return (
    <main>
      <div className="main-navigation">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Musics dataSongs={data} />
        </div>
      </div>
    </main>
  );
}
