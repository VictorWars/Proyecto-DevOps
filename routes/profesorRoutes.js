const express = require('express');
const profesorController = require('../controllers/profesorController');
const router = express.Router();

router.get('/', profesorController.getAll);
router.post('/', profesorController.create);

module.exports = router;
