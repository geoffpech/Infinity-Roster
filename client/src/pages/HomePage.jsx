import { Link } from "react-router-dom";

import Stanlee from "../assets/images/Stann_lee_fan_art.png";

export default function HomePage() {
  return (
    <div className="HomePage_background">
      <div className="Homepage_list">
        <ul>
          <li>
            <Link to="/accountcreation">
              <button className="HomePage_button" type="button">
                Création de compte
              </button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="HomePage_button" type="button">
                Connexion
              </button>
            </Link>
          </li>
          <li>
            <Link to="/hero">
              <button className="HomePage_button" type="button">
                Hero
              </button>
            </Link>
          </li>
          <li>
            <Link to="/vilain">
              <button className="HomePage_button" type="button">
                Vilain
              </button>
            </Link>
          </li>
          <li>
            <Link to="/favoris">
              <button className="HomePage_button" type="button">
                Favoris
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <p>
        S'adresse aux passionnés de comics et de super-héros souhaitant avoir un
        accès rapide et personnalisé aux caractéristiques de leurs personnages
        favoris.
      </p>
      <img src={Stanlee} alt="stan lee fan art haut du corps" />
    </div>
  );
}
