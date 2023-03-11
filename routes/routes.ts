const express=require('express');
import { Connection } from '../config/dbCon';
import { Controller } from '../controllers/controller';
const controller=new Controller();
const connection = new Connection();
const pool=connection.pool;
export class Router{
    router=express.Router();

    constructor(){
        this.router.get("/user/:id",controller.getUser);
        this.router.get("/all",controller.getAll );
        this.router.post("/new",controller.newUser );
        this.router.put("/update",controller.editUser );
        this.router.delete("/delete", controller.deleteUser);
    }
    }
