import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="Homepage_list">
      <ul>
        <li>
          <Link to="/accountcreation">Création de compte</Link>
        </li>
        <li>
          <Link to="/login">Connexion</Link>
        </li>
        <li>
          <Link to="/hero">Hero</Link>
        </li>
        <li>
          <Link to="/vilain">Vilain</Link>
        </li>
        <li>
          <Link to="/favoris">Favoris</Link>
        </li>
      </ul>
    </div>
  );
}
