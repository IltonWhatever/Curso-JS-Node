module.exports = function(application){    
    application.get('/noticia', function(request, response){

        let connection = application.config.dbConnection(); // Referencia que recupera a conexão com o BD
        let noticiasModel = application.app.models.noticiasModel; // Recuperando o modulo Get e instancioando na variavel

        // Com a variavel instanciada, recuperamos o modulo getNoticia
        noticiasModel.getNoticia(connection, function(error, result){
            if(error){
                console.log(error);
            }else {
                response.render('noticias/noticia', {noticia: result});
            }
        });

    });
};