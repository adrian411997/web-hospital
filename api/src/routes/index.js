const { Router } = require("express");

const Turnos = require("./Turnos");
const Doctores = require("./Doctores");
const Pacientes = require("./Pacientes");
const Espec = require("./Espec");
const router = Router();

router.use("/turnos", Turnos);
router.use("/doctores", Doctores);
router.use("/pacientes", Pacientes);
router.use("/espec", Espec);

module.exports = router;
