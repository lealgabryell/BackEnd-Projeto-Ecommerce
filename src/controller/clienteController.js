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
    dataNascimento: dataNascimento
  })
  .then(cliente => {
    if(cliente){
      res.status(status.OK).send(cliente);
    }else{
      res.status(status.NOT_FOUND).send();
    }
  })
  .catch(error => next(error));
};

exports.SearchAll = (req, res, next) => {
  Cliente.findAll()
    .then(cliente => {
      if(cliente){
        res.status(status.OK).send(cliente);
      }
    })
    .catch(error => next(error));
}