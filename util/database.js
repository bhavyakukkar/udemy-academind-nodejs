const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'test',
    database: 'node-complete',
    password: 'Strong34S;#'
});

module.exports = pool.promise();