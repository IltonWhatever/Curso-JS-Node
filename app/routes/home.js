module.exports = function(application){
// Rota Home
    application.get('/', function(request, response){
        application.app.controllers.home.index(application, request, response);
    });
};