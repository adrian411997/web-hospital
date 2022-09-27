const { postPacientes } = require("../controllers/CRUD");

const router = require("express").Router();

router.post("/", postPacientes);

module.exports = router;
