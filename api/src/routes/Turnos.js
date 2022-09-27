const {
  getAllTurnos,
  postTurno,
  UpdateTurno,
  deleteTurno,
} = require("../controllers/CRUD");

const router = require("express").Router();

router.get("/", getAllTurnos);
router.post("/crear", postTurno);
router.put("/update", UpdateTurno);
router.delete("/delete", deleteTurno);

module.exports = router;
