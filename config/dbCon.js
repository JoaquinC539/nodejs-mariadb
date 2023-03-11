"use strict";
const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: '123456',
    database: 'usersdb',
    connectionLimit: 5
});
//Connect
pool.getConnection((err, connection) => {
    if (err) {
        console.error("An error occured: " + err);
    }
    if (connection) {
        connection.release();
        return;
    }
});
module.exports = pool;
