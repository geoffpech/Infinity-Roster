const AbstractRepository = require("./AbstractRepository");

class BandRepository extends AbstractRepository {
  constructor() {
    super({ table: "band" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = BandRepository;
