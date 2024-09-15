import { Link } from "react-router-dom";
 
export default function HomePage() {
  return (
    <div className="Homepage_list">
      <ul>
        <li>
          <Link to="/okrgok,vred,">Création de compte</Link>
        </li>
        <li>Connexion</li>
        <li>Hero</li>
        <li>Vilain</li>
        <li>Favoris</li>
      </ul>
    </div>
  );
}
