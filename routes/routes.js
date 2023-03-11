"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express = require('express');
const dbCon_1 = require("../config/dbCon");
const controller_1 = require("../controllers/controller");
const connection = new dbCon_1.Connection();
const pool = connection.pool;
class Router {
    constructor() {
        this.router = express.Router();
        this.router.get("/user/:id", controller_1.getUser);
        this.router.get("/all", controller_1.getAll);
        this.router.post("/new", controller_1.newUser);
        this.router.put("/update", controller_1.editUser);
        this.router.delete("/delete", controller_1.deleteUser);
    }
}
exports.Router = Router;
