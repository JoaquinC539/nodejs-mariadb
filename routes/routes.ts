const express=require('express');

export class Router{
    router=express.Router();

    constructor(){
        this.router.get("/get",(req:any,res:any)=>{
            res.send("Hello get request from routes")});
        this.router.post("/post",(req:any,res:any)=>{
            res.send("Hello post request from routes")});
        this.router.put("/put",(req:any,res:any)=>{
            res.send("Hello put request from routes")});
        this.router.delete("/delete",(req:any,res:any)=>{
            res.send("Hello delete request from routes")});
    }
    }
