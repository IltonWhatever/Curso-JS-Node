// let dbConnection = require('../../config/dbConnection');
module.exports = function(app){    
    // Rota Noticias
    app.get('/noticias', function(request, response){

        let connection = app.config.dbConnection(); // Referencia que recupera a conexão com o BD

        // Consulta e armazena os resultados dos selects, em caso de erro armazena o erro em 'error'
        connection.query('select * from noticias', function(error, result){
            if(error){
                console.log(error);
            }else {
                response.render('noticias/noticias', {noticias: result});
            }
        });

    });
};