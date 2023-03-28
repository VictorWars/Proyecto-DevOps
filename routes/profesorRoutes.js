const express = require("express");
const profesorController = require('../controllers/profesorController');
const router = express.Router();

router.get("/", profesorController.getAll);

module.exports = router;