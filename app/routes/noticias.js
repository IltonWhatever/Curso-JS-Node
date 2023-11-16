module.exports = function(application){    
    // Rota Noticias
    application.get('/noticias', function(request, response){
        application.app.controllers.noticias.noticias(application, request, response);
        
    });

    // Rota Noticia
    application.get('/noticia', function(request, response){
        application.app.controllers.noticias.noticia(application, request, response);
        
    });
};