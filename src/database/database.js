const Sequelize = require("sequelize");

module.exports = new Sequelize("ecommerce", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});
 