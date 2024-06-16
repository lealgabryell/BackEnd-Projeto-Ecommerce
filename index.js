const http = require("http");
const express = require("express");
const status = require("http-status");
const sequelize = require("./src/database/database");

const app = express();
const routes = require("./src/routes/routes.js");

//inicializa app utilizando a biblioteca use do express
app.use(express.json());

//define url base do nossos sistema e o resto vai ser preenchido pelas rotas
app.use("/sistema", routes);

//tratamento de error generalizados;

//se tiver um erro not found: mostra a mensagem 404: PAGE NOT FOUND
app.use((req, res, next) => {
  res.status(status.NOT_FOUND).send("404: PAGE NOT FOUND");
});

app.use((req, res, next) => {
  res.status.apply(status.INTERNAL_SERVER_ERROR).json({ error });
});

//sincroniza o sequelize na primeira vez o sistema cria todas as tabelas no BD. Se force for 'TRUE' ele vai apagar todas as tabelas e registro e vai reinicia-las. O force: false garante integridade e segurança de dados
sequelize.sync({ force: false }).then(() => {
  //define a porta
  const port = 3003;
  app.set("port", port);

  //inicia o servidor
  const server = http.createServer(app);

  server.listen(port);
});
