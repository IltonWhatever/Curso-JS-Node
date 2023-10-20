// Request da biblioteca que é usada para criar o server
var http = require('http');

// Criando o serve e armazenando na variavel server
var server = http.createServer( function(request, response){
    // Armazenando a url que sera usada para identificar qual rota seguir
    var rota = request.url;

    // Identificando qual rota seguir com base na variavel
    if (rota == "/home"){
        response.end("<html><body> <h1> Pagina Home </h1> </body></html>");
    }else if(rota == "/teste"){
        response.end("<html><body> <h1> Pagina Teste </h1> </body></html>");
    }else{
        response.end("<html><body> <h1> Pagina Inicial </h1> </body></html>");
    };


    
    
});

// Usando a propriedade listen para "ouvir" na porta 3000
server.listen(3000);