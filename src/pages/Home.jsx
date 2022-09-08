import "../assets/css/App.css";
import Hero from "../components/Hero";
import NavbarHome from "../components/NavbarHome";

export default function Home() {
  return (
    <main>
      <div className="">
        <div className="content">
          <NavbarHome />
          <Hero />
        </div>
      </div>
    </main>
  );
}
