import { Link } from "react-router-dom";

import MiniStanLee from "../assets/images/Mini_stan_lee.png";
import MenuBurger from "../assets/images/MenuBurger_infinity_Roster.png";

export default function NavBar() {
  return (
    <div>
      <div className="NavBar_mobile">
        <img src={MiniStanLee} alt="figurine de stan lee " />
        <Link to="/">
          <h1>Infinity Roster</h1>
        </Link>
        <button className="NavBar_menu" type="button">
          <img src={MenuBurger} alt="trois trait pour ouvrir le menu burger " />{" "}
        </button>
      </div>
      <div className="NavBar_desktop">
        <div className="NavBar_Stan_title">
          <img src={MiniStanLee} alt="figurine de stan lee " />
          <Link to="/">
            <h1>Infinity Roster</h1>
          </Link>
        </div>
        <div className="NavBar_menu_list">
          <ul>
            <Link to="/">
              <li>Accueil</li>
            </Link>
            <Link to="/hero?band=">
              <li>Hero</li>
            </Link>
            <Link to="/vilain">
              <li>Vilain</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
