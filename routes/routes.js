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
const pool = require('../config/dbCon');
class Router {
    constructor() {
        this.router = express.Router();
        this.router.get("/get", (req, res) => {
            res.send("Hello get request from routes");
        });
        this.router.post("/post", (req, res) => {
            res.send("Hello post request from routes");
        });
        this.router.put("/put", (req, res) => {
            res.send("Hello put request from routes");
        });
        this.router.delete("/delete", (req, res) => {
            res.send("Hello delete request from routes");
        });
        this.router.get("/:id", function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const sqlQuery = 'SELECT id,email,password,created_at FROM users WHERE id=?;';
                    const rows = yield pool.query(sqlQuery, req.params.id);
                    res.status(200).json(rows);
                }
                catch (error) {
                    res.status(400).send(error.message);
                }
            });
        });
    }
}
exports.Router = Router;
