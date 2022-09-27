const { getEspec } = require("../controllers/CRUD");

const router = require("express").Router();

router.get("/", getEspec);

module.exports = router;
