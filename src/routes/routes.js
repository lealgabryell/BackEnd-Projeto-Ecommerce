const express = require("express");
const router = express.Router();
const ClienteController = require("../controller/clienteController.js");
const ProdutoController = require("../controller/produtoController.js");

router.post("/clientes", ClienteController.Insert);
router.post("/produtos", ProdutoController.Insert);

router.get("/clientes", ClienteController.SearchAll);
router.get("/produtos", ProdutoController.SearchAll);

router.get("/clientes/:cpf", ClienteController.SearchByPk);
router.get("/produtos/:id", ProdutoController.SearchByPk);

router.put("/clientes/:cpf", ClienteController.Update);
router.put("/produtos/:id", ProdutoController.Update);

router.delete("/clientes/:cpf", ClienteController.Delete);
router.delete("/produtos/:id", ProdutoController.Delete);
module.exports = router;
