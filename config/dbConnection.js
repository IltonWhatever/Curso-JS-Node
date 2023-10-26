var mysql = require('mysql2');
module.exports = function(){
        return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1805',
        database: 'portal_noticias'
    });
}