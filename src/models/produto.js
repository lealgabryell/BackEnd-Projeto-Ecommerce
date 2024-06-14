const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");

const Produto = sequelize.define("produto", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  titulo: {
    allowNull: false,
    type: Sequelize.STRING(55),
  },
  descricao: {
    allowNull: false,
    type: Sequelize.STRING(255),
  },
  cor: {
    allowNull: false,
    type: Sequelize.STRING(20),
  },
  preco: {
    allowNull: false,
    type: Sequelize.DOUBLE,
    validate: {
      len: [1, 99999],
    },
  },
});
module.exports = Produto;
