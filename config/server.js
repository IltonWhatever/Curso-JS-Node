// Configs da aplicação
var express = require('express');
var app = express();

// Config para setar o uso da rederização pelo EJS para o express
app.set('view engine', 'ejs');
// Apotando o diretorio padrão das views
app.set('views', './app/views')

module.exports = app;