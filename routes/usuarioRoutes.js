const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.post('/signUp', usuarioController.signUp);
router.post('/signIn', usuarioController.signIn);

module.exports = router;
