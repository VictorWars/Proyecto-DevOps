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


/**
 * Set custom routers
 */
router.use("/", salonesRoutes);

router.use('/profesores', profesorRoutes);

module.exports = router;