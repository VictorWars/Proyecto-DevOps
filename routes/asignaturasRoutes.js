const express = require("express");
const asignaturasController = require("../controllers/asignaturasController");
const authentication = require('../middlewares/authentication');


const router = express.Router();

router.get("/asignaturas", authentication, asignaturasController.getAll);
router.get("/asignaturas/:id", authentication, asignaturasController.getById);
router.post("/asignaturas",authentication, asignaturasController.create);
router.put("/asignaturas/:id", authentication, asignaturasController.update);
router.delete("/asignaturas/:id", authentication, asignaturasController.destroy);

module.exports = router;