import "../assets/css/App.css";
import Musics from "../components/Musics";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
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
