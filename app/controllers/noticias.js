// Modulos de controles para rotas referentes a noticias

module.exports.noticias = function(application, request, response){
    const connection = application.config.dbConnection(); // Referencia que recupera a conexão com o BD
    const noticiasModel = new application.app.models.NoticiasDAO(connection); // Acessando modulos que foram carregados em APP pelo Consign

    noticiasModel.getNoticias(function(error, result){
        if(error){
            console.log(error);
        }else {
            response.render('noticias/noticias', {noticias: result});
        }
    });
}

module.exports.noticia = function(application, request, response){
    const connection = application.config.dbConnection();
    const noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(function(error, result){
        if(error){
            console.log(error);
        }else {
            response.render('noticias/noticia', {noticia: result});
        }
    });
}