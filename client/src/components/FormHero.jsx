import PropTypes from "prop-types";

export default function FormHero({ bands }) {
  return (
    <div className="Edit_Hero">
      <h2>Informations du héro</h2>
      <label htmlFor="name"> Nom du héro :</label>
      <input id="FormHero_name" name="name" type="text" required />
      <label htmlFor="alias"> Alias du héro :</label>
      <input id="FormHero_alias" name="alias" type="text" required />
      <label htmlFor="biography"> Biographie du héro :</label>
      <input id="FormHero_biography" name="biography" type="text" required />
      <label htmlFor="image">Photo du héro</label>
      <input id="image" name="image" type="file" />
      <label htmlFor="band_id"> Groupe du héro :</label>
      <select id="FormHero_band_id" name="band_id" required>
        <option value="">---------</option>
        {bands.map((band) => (
          <option key={band.id} value={band.id}>
            {band.name}
          </option>
        ))}
      </select>
    </div>
  );
}

FormHero.propTypes = {
  bands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
};
