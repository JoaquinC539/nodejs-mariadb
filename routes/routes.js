"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express = require('express');
const dbCon_1 = require("../config/dbCon");
const connection = new dbCon_1.Connection();
const pool = connection.pool;
class Router {
    constructor() {
        this.router = express.Router();
        this.router.get("/user/:id", function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let sqlQuery = 'SELECT id,email,password,created_at FROM users WHERE id=?;';
                    let rows = yield pool.query(sqlQuery, req.params.id);
                    res.status(200).json(rows);
                }
                catch (error) {
                    res.status(400).send(error.message);
                }
            });
        });
        this.router.get("/all", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const sqlQuery = "SELECT * FROM users;";
                const rows = yield pool.query(sqlQuery);
                res.status(200).json(rows);
            }
            catch (e) {
                res.status(400).send(e.message);
            }
        }));
        this.router.post("/new", function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { email, password } = req.body;
                    const sqlQuery = 'INSERT INTO users (email, password) VALUES (?, ?);';
                    const result = yield pool.query(sqlQuery, [email, password]);
                    res.status(200).json({ message: "Record created successfully" });
                }
                catch (error) {
                    res.status(400).send(error.message);
                }
            });
        });
        this.router.put("/update", function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { email, password, id } = req.body;
                    const sqlQuery = 'UPDATE users SET email = ?, password = ? WHERE id = ?;';
                    const result = yield pool.query(sqlQuery, [email, password, id]);
                    res.status(200).json({ message: "Record updated successfully" });
                }
                catch (error) {
                    res.status(400).send(error.message);
                }
            });
        });
        this.router.delete("/delete", function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const sqlQuery = 'DELETE FROM users WHERE id = ?;';
                    const result = yield pool.query(sqlQuery, req.body.id);
                    res.status(200).json({ message: "Record deleted successfully" });
                }
                catch (error) {
                    res.status(400).send(error.message);
                }
            });
        });
    }
}
exports.Router = Router;
