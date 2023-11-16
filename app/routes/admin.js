// Modulos somente para uso de Rotas

module.exports = function(application){  
    // Rota Inclusão de noticias formulario.
    application.get('/formulario_inclusao_noticia', function(request, response){
        application.app.controllers.admin.formulario_inclusao_noticia(application, request, response);
    });

    // Rota POST que recebe o formulario.
    application.post('/noticias/salvar', function(request, response){
        application.app.controllers.admin.noticias_salvar(application, request, response);
    });
}