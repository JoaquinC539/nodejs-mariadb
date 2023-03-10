"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require('dotenv').config();
const port = Number(process.env.PORT) || 3000;
const mainApp = new app_1.App(port);
mainApp.serverCreate(port);
