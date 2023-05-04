const express = require('express');
const alumnoController = require('../controllers/alumnoController');
const authentication = require('../middlewares/authentication');
const router = express.Router();

router.get('/alumnos', authentication, alumnoController.getAll);
router.put('/alumnos/:id', authentication, alumnoController.update);
router.post('/alumnos', authentication, alumnoController.create);
router.get('/alumnos/:id', authentication, alumnoController.getById);
router.delete('/alumnos/:id', authentication, alumnoController.destroy);

module.exports = router;
