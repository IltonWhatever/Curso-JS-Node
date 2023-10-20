// Importando o express.
var express = require('express');
var app = express();

// Setando o express para usar a engine de view do EJS
app.set('view engine', 'ejs');

// Rota padrão
app.get('/', function(request, response){
    response.send("<html><body> <h1> Pagina Inicial </h1> </body></html>");
});

// Rota teste usando Modulos
app.get('/teste', function(request, response){
    // Usando render para rederizar a pagina html por meio do arquivo .EJS
    response.render("secao/teste");
});

// Usando a propriedade listen para ouvir na porta desejada
app.listen(3000, function(){
    console.log('Servidor rodando com Express na porta 3000')
});