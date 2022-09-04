import "../assets/css/App.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <main>
      <div className="main-navigation">
        <Sidebar />
        <Navbar />
      </div>
    </main>
  );
}

export default Home;
