import { useContext } from "react";
import "../assets/css/App.css";
import Musics from "../components/Musics";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MusicContext from "../data/MusicContext";

function Home() {
  const { data, setData } = useContext(MusicContext);
  console.log(setData);
  return (
    <main>
      <div className="main-navigation">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Musics />
        </div>
      </div>
    </main>
  );
}

export default Home;
