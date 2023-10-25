module.exports = function(app){
    // Rota Noticias
    app.get('/noticias', function(request, response){
        var mysql = require('mysql2');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1805',
            database: 'portal_noticias'
        });

        connection.query('select * from noticias', function(error, result){
            if(error){
                console.log(error)
            }else {
                response.send(result);
            }
        });

        //response.render('noticias/noticias');
    });
};