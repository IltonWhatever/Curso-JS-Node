module.exports = function(application){
    
    // Rota Inclusão de noticias formulario.
    application.get('/formulario_inclusao_noticia', function(request, response){
        response.render('admin/form_add_noticia')
    });

    // Rota POST que recebe o formulario.
    application.post('/noticias/salvar', function(request, response){
        let noticia = request.body; // Variavel contendo o JSON da noticia feita no formulario.

        // Express-Validator - Os codigos a seguir servem para validar os dados dos formularios.
        request.assert('titulo','Titulo é obrigatorio').notEmpty();
        request.assert('resumo','Resumo é obrigatorio').notEmpty();
        request.assert('resumo','Resumo deve conter ao minimo 10 caracteres e no maximo 100').len(10, 100);
        request.assert('autor','Autor é obrigatorio').notEmpty();
        request.assert('data_noticia','Autor é obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'});
        request.assert('noticia','Noticia é obrigatorio').notEmpty();

        // Armazenando os erros do validator para variavel
        const erros = request.validationErrors();
        
        if(erros){
            response.render('admin/form_add_noticia', {validacao: erros});
            return;
        }


        let connection = application.config.dbConnection(); // Referencia que recupera a conexão com o BD
        let noticiasModel = new application.app.models.NoticiasDAO(connection); // Recuperando o modulo Get e instancioando na variavel

        // Com a variavel instanciada, recuperamos o modulo getNoticia
        noticiasModel.salvarNoticia(noticia, function(error, result){
            if(error){
                console.log(error);
            }else {
                response.redirect('/noticias');
            }
        });
    });
}