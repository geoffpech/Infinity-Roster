import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

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
    </>
  );
}

export default App;
