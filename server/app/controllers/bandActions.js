const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const bands = await tables.band.readAll();
    res.json(bands);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
