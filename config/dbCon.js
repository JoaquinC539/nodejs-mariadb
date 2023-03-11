"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const mariadb = require('mariadb');
class Connection {
    constructor() {
        this.pool = mariadb.createPool({
            host: 'localhost',
            port: '3307',
            user: 'root',
            password: '123456',
            database: 'usersdb',
            connectionLimit: 5
        });
        this.pool.getConnection((err, connection) => {
            if (err) {
                console.error("An error occured: " + err);
            }
            if (connection) {
                connection.release();
                return;
            }
        });
    }
}
exports.Connection = Connection;
