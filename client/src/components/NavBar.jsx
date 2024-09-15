import MiniStanLee from "../assets/images/Mini_stan_lee.png";
import MenuBurger from "../assets/images/MenuBurger_infinity_Roster.png";

export default function NavBar() {
  return (
    <div>
      <div className="NavBar_mobile">
        <img src={MiniStanLee} alt="figurine de stan lee " />
        <h1>Infinity Roster</h1>
        <button className="NavBar_menu" type="button">
          <img src={MenuBurger} alt="trois trait pour ouvrir le menu burger " />{" "}
        </button>
      </div>
      <div className="NavBar_desktop">
        <div className="NavBar_Stan_title">
          <img src={MiniStanLee} alt="figurine de stan lee " />
          <h1>Infinity Roster</h1>
        </div>
        <div className="NavBar_menu_list">
          <ul>
            <li>Accueil</li>
            <li>Hero</li>
            <li>Vilain</li>
            <li>Création de compte</li>
            <li>Connexion</li>
            <li>Favoris</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
