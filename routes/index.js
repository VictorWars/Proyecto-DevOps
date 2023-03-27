/**
 * Insert libreries
 */
const express = require("express");
const router = express.Router();

/**
 * Insert cutom routes
 */
const salonesRoutes = require('./salonesRoutes');


/**
 * Set custom routers
 */
router.use("/", salonesRoutes);

module.exports = router;