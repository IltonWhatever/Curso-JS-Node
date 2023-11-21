module.exports.index = function(application, request, response){
    const connection = application.config.dbConnection();
    const noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function(error, result){
        console.log(result);
        response.render('home/index', {noticias: result});
    });

}