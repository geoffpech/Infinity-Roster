import { useLoaderData, useNavigate } from "react-router-dom";
import CharacterHeroCard from "../components/CharacterHeroCard";

export default function CharacterHero() {
  const { heros, bands } = useLoaderData();
  const navigate = useNavigate();

  const handleChangeSelect = (event) => {
    navigate(`/hero?band=${event.target.value}`);
  };
  return (
    <div className="CharactereHeroPage">
      <h1>Hero Marvel</h1>
      <div className="CharacterHero_input">
        <select onChange={handleChangeSelect}>
          <option value="">Tous les groupes</option>
          {bands.map((band) => (
            <option key={band.id} value={band.name}>
              {band.name}
            </option>
          ))}
        </select>
      </div>
      <div className="CharacterHero_list">
        {heros.map((hero) => (
          <div className="CharacterHero" key={hero.id}>
            <CharacterHeroCard hero={hero} />
          </div>
        ))}
      </div>
    </div>
  );
}
