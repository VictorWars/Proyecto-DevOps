const express = require('express');
const alumnoController = require('../controllers/alumnoController');
const router = express.Router();

router.get('/alumnos', alumnoController.getAll);

module.exports = router;
