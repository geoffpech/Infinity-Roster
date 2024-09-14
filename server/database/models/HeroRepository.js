const abstractRepository = require("./AbstractRepository");

class HeroRepositroy extends abstractRepository {
  constructor() {
    super({ table: "hero" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
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
      `insert into ${this.table} (name, alias, biography, image_url) values (?, ?, ?, ?)`,
      [hero.name, hero.alias, hero.biography, hero.image_url]
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
      `update ${this.table} set name = ?, alias = ?, biography = ?, image_url = ? where id = ?`,
      [hero.name, hero.alias, hero.biography, hero.image_url, hero.id,]
    );
    return result.affectedRows;
  }
}

module.exports = HeroRepositroy;

