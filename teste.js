var http = require('http');

var server = http.createServer( function(request, response){
    request.end("<html><body> Teste </body></html>");
    
});

server.listen(3000);