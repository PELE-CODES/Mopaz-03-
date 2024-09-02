// carregando módulos

const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const adm = require("./routes/adm");
const path = require("path");

//Config
  // Body Parser
  app.use(bodyParser.urlencoded({ extended: true}))
  app.use(bodyParser .json())

  // Handlebars
  app.engine('handlebars', engine({ defaultLayout: 'main' }));
  app.set('view engine', 'handlebars');

  // Mongoose
  mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/bdblog").then(() => {
      console.log('Conectado ao Banco de Dados ')
    }).catch((err) => {
      console.log('erro ao se conectar:' + err)
    })

  // Public
  app.use(express.static(path.join(__dirname, "public")));

  // Rotas

  
  app.get('/', (req, res) => {
    res.send("rota principal");
  });

  app.get('/posts', (req, res) => {
    res.send('lista de posts');
  });

  app.use('/admin', adm);

const PORT = 8081;
app.listen(PORT, () => {
  console.log("Servidor rodando!! http://localhost:8081");
});
