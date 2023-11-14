module.exports = function(application){    
    application.get('/noticia', function(request, response){

        let connection = application.config.dbConnection(); // Referencia que recupera a conexão com o BD
        let noticiasModel = new application.app.models.NoticiasDAO(connection); // Recuperando o modulo Get e instancioando na variavel

        // Com a variavel instanciada, recuperamos o modulo getNoticia
        noticiasModel.getNoticia(function(error, result){
            if(error){
                console.log(error);
            }else {
                response.render('noticias/noticia', {noticia: result});
            }
        });

    });
};