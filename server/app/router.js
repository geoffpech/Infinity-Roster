const express = require("express");

const router = express.Router();

const heroActions = require("./controllers/heroActions");
const bandActions = require("./controllers/bandActions");
const uploadPicture = require("./services/middlewar");

router.get("/hero", heroActions.browse);
router.get("/band", bandActions.browse);

router.get("/hero/:id", heroActions.read);

router.post("/hero", uploadPicture, heroActions.add);

router.delete("/hero/:id", heroActions.destroy);

router.put("/hero/:id", uploadPicture, heroActions.edit);

module.exports = router;
