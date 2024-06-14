const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');

const Cliente = sequelize.define("cliente", {
  cpf: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING(11)
  },
  nome:{
    allowNull: false,
    type: Sequelize.STRING(100),
    validate: {
      len: [2, 100]
    }
  },
  endereco:{
    allowNull: false,
    type: Sequelize.STRING(100),
    validate: {
      len: [3, 100]
    }
  },
  telefone:{
    allowNull: false,
    type: Sequelize.STRING(11),
    validate: {
      len: [11]
    }
  },
  email:{
    allowNull: false,
    type: Sequelize.STRING(50),
    validate: {
      len: [3, 50]
    }
  },
  senha:{
    allowNull: false,
    type: Sequelize.STRING(50),
    validate: {
      len: [3, 50]
    }
  },
  dataNascimento: {
    allowNull: false,
    type: Sequelize.DATE(),
    validate: {
      isDate: true
    }
  }
});
module.exports = Cliente;