const Produto = require("../models/produto.js");
const status = require("http-status");

exports.Insert = (req, res, next) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  const cor = req.body.cor;
  const preco = req.body.preco;

  //passa os parametros
  Produto.create({
    titulo: titulo,
    descricao: descricao,
    cor: cor,
    preco: preco,
  })
    .then((produto) => {
      if (produto) {
        res.status(status.OK).send(produto);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};
