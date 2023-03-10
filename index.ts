import { App } from './app';
require('dotenv').config();

const port:number=Number(process.env.PORT) || 3000;
const mainApp:App=new App(port);

mainApp.serverCreate(port);


