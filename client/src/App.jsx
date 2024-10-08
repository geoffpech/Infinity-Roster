import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./assets/styles/App.css";
import "./assets/styles/NavBar.css";
import "./assets/styles/Homepage.css";
import "./assets/styles/Footer.css";
import "./assets/styles/CharacterHero.css";
import "./assets/styles/CharacterHeroCard.css";
import "./assets/styles/AddHero.css";
import "./assets/styles/EditHero.css";
import "./assets/styles/FormHero.css";
import "./assets/styles/CharacterHeroDetails.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
