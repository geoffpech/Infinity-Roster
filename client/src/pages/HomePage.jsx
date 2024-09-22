import { Link } from "react-router-dom";

import Stanlee from "../assets/images/Stann_lee_fan_art.png";

export default function HomePage() {
  return (
    <div className="HomePage_background">
      <div className="Homepage_list">
        <ul>
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
        </ul>
      </div>
      <div className="HomePage_description">
        <p>
          S'adresse aux passionnés de comics et de super-héros souhaitant avoir
          un accès rapide et personnalisé aux caractéristiques de leurs
          personnages favoris.
        </p>
      </div>
      <img src={Stanlee} alt="stan lee fan art haut du corps" />
    </div>
  );
}
