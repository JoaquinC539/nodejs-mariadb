const express=require('express');
import { Connection } from '../config/dbCon';
import { getUser,getAll,newUser,editUser,deleteUser } from '../controllers/controller';
const connection = new Connection();
const pool=connection.pool;
export class Router{
    router=express.Router();

    constructor(){
        this.router.get("/user/:id",getUser);
        this.router.get("/all", getAll );
        this.router.post("/new",newUser );
        this.router.put("/update",editUser );
        this.router.delete("/delete", deleteUser);
    }
    }
