// Request da biblioteca que é usada para criar o server
var http = require('http');

// Criando o serve e armazenando na variavel server
var server = http.createServer( function(request, response){
    response.end("<html><body> Teste </body></html>");
    
});

// Usando a propriedade listen para "ouvir" na porta 3000
server.listen(3000);