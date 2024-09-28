import { useLoaderData } from "react-router-dom";
import CharacterHeroCard from "../components/CharacterHeroCard";

export default function CharacterHeroDetails() {
  const hero = useLoaderData();

  return (
    <>
      <h1> Alias du hero</h1>
      <CharacterHeroCard hero={hero} />
    </>
  );
}
