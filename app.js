// Configs da aplicação
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// Rota Home
app.get('/', function(request, response){
    response.render('home/index')
});

// Rota Inclusão de noticias formulario
app.get('/formulario_inclusao_noticia', function(request, response){
    response.render('admin/form_add_noticia')
});

// Rota Noticias
app.get('/noticias', function(request, response){
    response.render('noticias/noticias')
});

// Usando a propriedade listen para ouvir na porta desejada
app.listen(3000, function(){
    console.log('Servidor rodando com Express na porta 3000')
});