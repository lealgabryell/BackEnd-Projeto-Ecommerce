module.exports = {
  development: {
    database: "ecommerce",
    user: "root",
    password: "123456",
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  },
  production: {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
};
