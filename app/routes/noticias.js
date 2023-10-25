module.exports = function(app){
// Rota Noticias
    app.get('/noticias', function(request, response){
        response.render('noticias/noticias')
    });
};