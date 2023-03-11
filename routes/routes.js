"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express = require('express');
const dbCon_1 = require("../config/dbCon");
const controller_1 = require("../controllers/controller");
const controller = new controller_1.Controller();
const connection = new dbCon_1.Connection();
const pool = connection.pool;
class Router {
    constructor() {
        this.router = express.Router();
        this.router.get("/user/:id", controller.getUser);
        this.router.get("/all", controller.getAll);
        this.router.post("/new", controller.newUser);
        this.router.put("/update", controller.editUser);
        this.router.delete("/delete", controller.deleteUser);
    }
}
exports.Router = Router;
