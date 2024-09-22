/* eslint-disable react/prop-types */

export default function CharacterHeroCard({ hero }) {
  return (
    <div className="Character_hero_card">
      <img
        src={`${import.meta.env.VITE_API_URL}/uploads/${hero.image}`}
        alt={hero.name}
      />

      <h2>{hero.name}</h2>
      <h3>Alias: {hero.alias}</h3>
      <p>{hero.biography}</p>
    </div>
  );
}
