import "../assets/css/App.css";
import MusicApp from "../components/MusicApp";
import Musics from "../components/Musics";

export default function Dashboard() {
  return (
    <MusicApp>
      <Musics />
    </MusicApp>
  );
}
