"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const pool = require('./config/dbCon');
require('dotenv').config({ path: './.env' });
const DB = require('./config/dbCon');
const port = Number(process.env.PORT) || 3000;
const mainApp = new app_1.App(port);
mainApp.serverCreate(port);
