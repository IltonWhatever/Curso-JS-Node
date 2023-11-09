module.exports = function(app){
    
    // Rota Inclusão de noticias formulario.
    app.get('/formulario_inclusao_noticia', function(request, response){
        response.render('admin/form_add_noticia')
    });

    // Rota POST que recebe o formulario.
    app.post('/noticias/salvar', function(request, response){
        let noticias = request.body;
        response.send(noticias);
    });
}