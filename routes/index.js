/**
 * Insert libreries
 */
const express = require("express");
const router = express.Router();

/**
 * Insert custom routes
 */
const salonesRoutes = require('./salonesRoutes');
const profesorRoutes =require('./profesorRoutes');
const asignaturasRoutes = require('./asignaturasRoutes');
const usuarioRoutes = require('./usuarioRoutes');


/**
 * Set custom routers
 */
router.use("/", salonesRoutes);
router.use("/", asignaturasRoutes)
router.use("/",usuarioRoutes);

router.use('/', profesorRoutes);

module.exports = router;
