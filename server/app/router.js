const express = require("express");

const router = express.Router();

const heroActions = require("./controllers/heroActions");
const bandActions = require("./controllers/bandActions");

router.get("/hero", heroActions.browse);
router.get("/band", bandActions.browse);

router.get("/hero/:id", heroActions.read);

router.post("/hero", heroActions.add);

router.delete("/hero/:id", heroActions.destroy);

router.put("/hero/:id", heroActions.edit);

module.exports = router;
