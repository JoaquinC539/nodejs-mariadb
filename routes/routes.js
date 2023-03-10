"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express = require('express');
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
    }
}
exports.Router = Router;
