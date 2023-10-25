// Configs da aplicação
var express = require('express');
// Recuperando o modulo personalizado MSG
var app = express();
app.set('view engine', 'ejs');

module.exports = app;