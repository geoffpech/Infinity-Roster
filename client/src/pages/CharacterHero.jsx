import { useLoaderData } from "react-router-dom";
import CharacterHeroCard from "../components/CharacterHeroCard";

export default function CharacterHero() {
  const heros = useLoaderData();
  return (
    <div className="CharactereHeroPage">
      <h1>Hero Marvel</h1>
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
