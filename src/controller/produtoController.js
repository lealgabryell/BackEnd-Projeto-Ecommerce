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

exports.SearchAll = (req, res, next) => {
  Produto.findAll()
    .then((produto) => {
      if (produto) {
        res.status(status.OK).send(produto);
      }
    })
    .catch((error) => next(error));
};

//Armazena Id na constante e passa como parametro para pesquisar a chave primaria do cliente
exports.SearchByPk = (req, res, next) => {
  const id = req.params.id;

  Produto.findByPk(id)
    .then((produto) => {
      if (produto) {
        res.status(status.OK).send(produto);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};

exports.Update = (req, res, next) => {
  const id = req.params.id;
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  const cor = req.body.cor;
  const preco = req.body.preco;

  Produto.findByPk(id)
    .then((produto) => {
      if (produto) {
        produto
          .update(
            {
              titulo: titulo,
              descricao: descricao,
              cor: cor,
              preco: preco,
            },
            {
              where: { id: id },
            }
          )
          .then(() => {
            res.status(status.OK).send();
          })
          .catch((err) => next(error));
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};

exports.Delete = (req, res, next) => {
  const id = req.params.id;
  Produto.findByPk(id)
    .then((produto) => {
      if (produto) {
        produto
          .destroy({
            where: { id: id },
          })
          .then(() => {
            res.status(status.OK).send();
          })
          .catch((error) => next(error));
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};
