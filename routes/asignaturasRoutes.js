const express = require("express");
const salonesController = require("../controllers/salonesController");

const router = express.Router();

router.get("/salones", salonesController.getAll);
router.get("/salones", salonesController.getAll);

module.exports = router;