const Cliente = require("../models/cliente.js");
const status = require("http-status");

exports.Insert = (req, res, next) => {
  const cpf = req.body.cpf;
  const nome = req.body.nome;
  const endereco = req.body.endereco;
  const telefone = req.body.telefone;
  const email = req.body.email;
  const senha = req.body.senha;
  const dataNascimento = req.body.dataNascimento;

  //passa os parametros
  Cliente.create({
    cpf: cpf,
    nome: nome,
    endereco: endereco,
    telefone: telefone,
    email: email,
    senha: senha,
    dataNascimento: dataNascimento,
  })
    .then((cliente) => {
      if (cliente) {
        res.status(status.OK).send(cliente);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};

exports.SearchAll = (req, res, next) => {
  Cliente.findAll()
    .then((cliente) => {
      if (cliente) {
        res.status(status.OK).send(cliente);
      }
    })
    .catch((error) => next(error));
};

exports.SearchByPk = (req, res, next) => {
  //Armazena CPF na constante e passa como parametro para pesquisar a chave primaria do cliente
  const cpf = req.params.cpf;

  Cliente.findByPk(cpf)
    .then((cliente) => {
      if (cliente) {
        res.status(status.OK).send(cliente);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};

//Atualiza os valores de um cliente, armazena-os em constantes, checa se eles já existem, se sim, modifica-os. A cláusula é o cpf, para evitar que TODOS os objetos tenha seus valores alterados.
exports.Update = (req, res, next) => {
  const cpf = req.body.cpf;
  const nome = req.body.nome;
  const endereco = req.body.endereco;
  const telefone = req.body.telefone;
  const email = req.body.email;
  const senha = req.body.senha;
  const dataNascimento = req.body.dataNascimento;

  Cliente.findByPk(cpf).then((cliente) => {
    if (cliente) {
      cliente.update({
        cpf: cpf,
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        email: email,
        senha: senha,
        dataNascimento: dataNascimento,
      },{
        where: {cpf:cpf}
      }).then( () => {
        res.status(status.OK).send();
      })
      .catch( (err) => next(error));
    }else {
      res.status(status.NOT_FOUND).send();
    }
  })
  .catch(error => next(error));
};
