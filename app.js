app = require('./config/server');

// Importando o modulo da rota Noticias.
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

// Usando a propriedade listen para ouvir na porta desejada
app.listen(3000, function(){
    console.log('Servidor rodando com Express na porta 3000')
});