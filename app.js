// Importando o express.
var express = require('express');

// Executando a função que veio com o import do express.
var app = express();

// Rota padrão
app.get('/', function(request, response){
    response.send("<html><body> <h1> Pagina Inicial </h1> </body></html>");
});

// Rota teste
app.get('/teste', function(request, response){
    response.send("<html><body> <h1> Pagina da Rota Teste </h1> </body></html>");
});

// Usando a propriedade listen para ouvir na porta desejada
app.listen(3000, function(){
    console.log('Servidor rodando com Express na porta 3000')
});