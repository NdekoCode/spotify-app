import "../assets/css/App.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NavbarHome from "../components/NavbarHome";

export default function Home() {
  return (
    <main>
      <div className="main-navigation">
        <div className="content">
          <NavbarHome />
          <Hero />
        </div>
      </div>
    </main>
  );
}
