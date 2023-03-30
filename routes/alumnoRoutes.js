const express = require("express");
const alumnoController = require('../controllers/alumnoController');
const router = express.Router();

router.get("/", alumnoController.getAll);

module.exports = router;