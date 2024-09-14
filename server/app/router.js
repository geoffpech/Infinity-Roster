const express = require("express");

const router = express.Router();

const heroActions = require("./controllers/heroActions");

router.get("/hero", heroActions.browse);

router.get("/hero/:id", heroActions.read);

router.post("/hero", heroActions.add);

router.delete("/hero/:id", heroActions.destroy);

router.put("/hero/:id", heroActions.edit);

module.exports = router;