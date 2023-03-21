const express = require("express");
const testController = require("../controllers/testController");

const router = express.Router();

router.get("/", testController.getAll);
router.post("/", testController.create);

module.exports = router;