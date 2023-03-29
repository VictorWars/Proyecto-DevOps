const profesorController = require('../controllers/profesorController');

const express = require('express');
const router = express.Router();

router.get('/', profesorController.getAll);
router.put('/:id', profesorController.update);
router.post('/', profesorController.create);
router.get('/:id', profesorController.getById);

module.exports = router;
