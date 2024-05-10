const express = require("express");
const router = express.Router();

const teste = require("../controller/testeController");

router.get("/teste", teste.listarTodasP);


module.exports = router;