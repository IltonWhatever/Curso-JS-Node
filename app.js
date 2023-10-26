app = require('./config/server');

// Usando a propriedade listen para ouvir na porta desejada
app.listen(3000, function(){
    console.log('Servidor rodando com Express na porta 3000')
});