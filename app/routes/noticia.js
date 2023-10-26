module.exports = function(app){    
    app.get('/noticia', function(request, response){

        let connection = app.config.dbConnection(); // Referencia que recupera a conexão com o BD

        
        connection.query('select * from noticias where id_noticia = 2', function(error, result){
            if(error){
                console.log(error);
            }else {
                response.render('noticias/noticia', {noticia: result});
            }
        });

    });
};