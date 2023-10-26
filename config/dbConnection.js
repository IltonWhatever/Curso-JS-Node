let mysql = require('mysql2');
let connMySql = function(){
    console.log("Conexão com BD foi Realizada.")
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1805',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    console.log("Modulo Banco de dados Conexão carregado.")
    return connMySql;
}