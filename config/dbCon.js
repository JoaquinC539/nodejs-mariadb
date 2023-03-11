"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const mariadb = require('mariadb');
require('dotenv').config({ path: '.env' });
class Connection {
    constructor() {
        this.pool = mariadb.createPool({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB,
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
