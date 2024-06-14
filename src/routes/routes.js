const express = require("express");
const router = express.Router();
const ClienteController = require("../controller/clienteController.js");
const ProdutoController = require("../controller/produtoController.js");

router.post("/clientes", ClienteController.Insert);
router.post("/produtos", ProdutoController.Insert);

module.exports = router;
