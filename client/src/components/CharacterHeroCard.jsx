/* eslint-disable react/prop-types */
import deadpool from "../assets/images/Deadpool.png";

export default function CharacterHeroCard({ hero }) {
  return (
    <div className="Character_hero_card">
      <img src={deadpool} alt="deadpool" />

      <h2>{hero.name}</h2>
      <h3>Alias: {hero.alias}</h3>
      <p>{hero.biography}</p>
    </div>
  );
}
