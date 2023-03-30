const express = require("express");
const salonesController = require("../controllers/salonesController");
const authentication = require('../middlewares/authentication');

const router = express.Router();

router.get("/salones", authentication, salonesController.getAll);
router.get("/salones/:id", authentication, salonesController.getById);
router.post("/salones", authentication, salonesController.create);
router.put("/salones/:id", authentication, salonesController.update);
router.delete("/salones/:id", authentication, salonesController.destroy);

module.exports = router;
