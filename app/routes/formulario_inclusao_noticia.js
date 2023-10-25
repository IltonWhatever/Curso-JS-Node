module.exports = function(app){
    // Rota Inclusão de noticias formulario
    app.get('/formulario_inclusao_noticia', function(request, response){
        response.render('admin/form_add_noticia')
    });
}