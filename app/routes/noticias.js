// let dbConnection = require('../../config/dbConnection');
module.exports = function(application){    
    // Rota Noticias
    application.get('/noticias', function(request, response){

        let connection = application.config.dbConnection(); // Referencia que recupera a conexão com o BD
        let noticiasModel = application.app.models.noticiasModel; // Acessando modulos que foram carregados em APP pelo Consign

        noticiasModel.getNoticias(connection, function(error, result){
            if(error){
                console.log(error);
            }else {
                response.render('noticias/noticias', {noticias: result});
            }
        });
    });
};