import { useLoaderData } from "react-router-dom";
import CharacterHeroCard from "../components/CharacterHeroCard";

export default function CharacterHeroDetails() {
  const hero = useLoaderData();

  return (
    <div className="CharacterHeroDetails">
      <h1> {hero.alias}</h1>
      <CharacterHeroCard hero={hero} />
    </div>
  );
}
