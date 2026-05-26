const express = require("express");
const router = express.Router();
const porVestControllers = require("../controllers/por_vestControllers");

router.get("/", porVestControllers.listarTudo);

module.exports = router;
