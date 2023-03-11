const express=require('express');
const pool=require('../config/dbCon');
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
        this.router.get("/:id",async function(req:any,res:any){
            try{
                const sqlQuery='SELECT id,email,password,created_at FROM users WHERE id=?;';
                const rows=await pool.query(sqlQuery,req.params.id);
                res.status(200).json(rows);
            }catch(error:any){
                res.status(400).send(error.message)
            }
        });
    }
    }
