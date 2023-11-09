app = require('./config/server');

// Usando a propriedade listen para ouvir na porta desejada
app.listen(3000, function(){
    console.log('Servidor Iniciado: http://localhost:3000/')
});