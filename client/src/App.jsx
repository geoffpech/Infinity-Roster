import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./assets/styles/App.css";
import "./assets/styles/NavBar.css";
import "./assets/styles/Homepage.css";

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
