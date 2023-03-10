"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
//Dependecies import
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routes_1 = require("./routes/routes");
//Define class
class App {
    constructor(port) {
        this.app = express();
        this.router = new routes_1.Router();
        this.routes = this.router.router;
        this.port = port;
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use("/api", this.routes);
    }
    serverCreate(port) {
        try {
            this.app.listen(port, () => {
                console.log(`Listening request at port: ${port}`);
            });
        }
        catch (e) {
            console.log("An error ocurred: " + e);
        }
    }
}
exports.App = App;
