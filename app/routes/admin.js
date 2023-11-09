module.exports = function(application){
    
    // Rota Inclusão de noticias formulario.
    application.get('/formulario_inclusao_noticia', function(request, response){
        response.render('admin/form_add_noticia')
    });

    // Rota POST que recebe o formulario.
    application.post('/noticias/salvar', function(request, response){
        let noticia = request.body; // Variavel contendo o JSON da noticia feita no formulario.

        let connection = application.config.dbConnection(); // Referencia que recupera a conexão com o BD
        let noticiasModel = application.app.models.noticiasModel; // Recuperando o modulo Get e instancioando na variavel

        // Com a variavel instanciada, recuperamos o modulo getNoticia
        noticiasModel.salvarNoticia(noticia, connection, function(error, result){
            if(error){
                console.log(error);
            }else {
                response.redirect('/noticias');
            }
        });
    });
}