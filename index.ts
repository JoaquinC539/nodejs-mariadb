
import { App } from './app';
const pool=require('./config/dbCon')
require('dotenv').config({path:'./.env'});
const DB=require('./config/dbCon');

const port:number=Number(process.env.PORT) || 3000;
const mainApp:App=new App(port);



mainApp.serverCreate(port);




