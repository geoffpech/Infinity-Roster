const abstractRepository = require("./AbstractRepository");

class HeroRepositroy extends abstractRepository {
  constructor() {
    super({ table: "hero" });
  }

  async readAll(band) {
    if (!band) {
      const [rows] = await this.database.query(
        `SELECT hero.*, band.id as band_id, band.name as band_name from ${this.table} join band on band.id = hero.band_id`
      );
      return rows;
    }

    const [rows] = await this.database.query(
      `select hero .*, band.id as band_id, band.name as band_name from ${this.table} join band on band.id = hero.band_id where band.name = ?`,
      [band]
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async create(hero) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, alias, biography, image) values (?, ?, ?, ?)`,
      [hero.name, hero.alias, hero.biography, hero.image]
    );
    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }

  async update(hero) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ?, alias = ?, biography = ?, image = ? where id = ?`,
      [hero.name, hero.alias, hero.biography, hero.image, hero.id]
    );
    return result.affectedRows;
  }
}

module.exports = HeroRepositroy;
