const { getAllDoctores, getDoctorsByEspec } = require("../controllers/CRUD");

const router = require("express").Router();

router.get("/", getAllDoctores);
router.get("/spec", getDoctorsByEspec);
module.exports = router;
