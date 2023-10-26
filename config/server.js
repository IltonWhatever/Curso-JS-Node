var express = require('express');
var consign = require('consign');

var app = express();

app.set('view engine', 'ejs'); // Config para setar o uso da rederização pelo EJS para o express
app.set('views', './app/views'); // Apotando o diretorio padrão das views

consign().include('app/routes').into(app); // Reconhece as rotas modulos da pasta rotas e envia para APP automatizando a importação de rotas

module.exports = app;