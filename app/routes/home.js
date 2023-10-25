module.exports = function(app){
// Rota Home
    app.get('/', function(request, response){
        response.render('home/index')
    });
};