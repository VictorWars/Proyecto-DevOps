/**
 * Insert libreries
 */
const express = require("express");
const router = express.Router();

/**
 * Insert cutom routes
 */
const testRoutes = require('./testRoutes');


/**
 * Set custom routers
 */
router.use("/test", testRoutes);

module.exports = router;