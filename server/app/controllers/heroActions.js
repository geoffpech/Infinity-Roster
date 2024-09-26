const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const { band } = req.query;
    const heros = await tables.hero.readAll(band);
    if (heros.length === 0) {
      res.json({
        message: "Pas de heros",
        result: heros,
      });
    } else {
      res.json({ result: heros });
    }
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const hero = await tables.hero.read(req.params.id);
    if (hero == null) {
      console.info(hero);
      res.sendStatus(404);
    } else {
      res.json(hero);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const hero = req.body;
  try {
    const insertId = await tables.hero.create(hero);
    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.hero.delete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const hero = { ...req.body, id: Number(req.params.id) };
    await tables.hero.update(hero);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const heroActions = { browse, read, add, destroy, edit };
module.exports = heroActions;
