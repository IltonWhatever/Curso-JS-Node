let mysql = require('mysql2');
let connMySql = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1805',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    return connMySql;
}