const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.set('view engine', 'ejs'); // Config para setar o uso da rederização pelo EJS para o express
app.set('views', './app/views'); // Apotando o diretorio padrão das views

// Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

consign()
    .include('app/routes') // Pasta das rotas
    .then('config/dbConnection.js') // Necessario colocar a extensão para especificar o modulo exato
    .then('app/models') // Carrega os models
    .into(app); // Reconhece as rotas modulos da pasta rotas e envia para APP automatizando a importação de rotas


module.exports = app;