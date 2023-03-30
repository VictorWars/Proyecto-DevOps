const profesorController = require('../controllers/profesorController');
const authentication = require('../middlewares/authentication');

const express = require('express');
const router = express.Router();

router.get('/profesores', authentication, profesorController.getAll);
router.put('/profesores/:id', authentication, profesorController.update);
router.post('/profesores', authentication, profesorController.create);
router.get('/profesores/:id', authentication, profesorController.getById);
router.delete('/profesores/:id', authentication, profesorController.destroy);

module.exports = router;
