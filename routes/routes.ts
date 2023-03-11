const express=require('express');
import { Connection } from '../config/dbCon';

const connection = new Connection();
const pool=connection.pool;
export class Router{
    router=express.Router();

    constructor(){
        this.router.get("/user/:id",async function(req:any,res:any){
            try{
                let sqlQuery='SELECT id,email,password,created_at FROM users WHERE id=?;';
                let rows=await pool.query(sqlQuery,req.params.id);
                res.status(200).json(rows);
            }catch(error:any){
                res.status(400).send(error.message)
            }
        });
        this.router.get("/all", async (req:any, res:any) => {
            try {
              const sqlQuery = "SELECT * FROM users;";
              const rows = await pool.query(sqlQuery);
              res.status(200).json(rows);
            } catch (e:any) {

              res.status(400).send(e.message);
            }
          });
          this.router.post("/new", async function(req:any,res:any){
            try {
                const { email, password } = req.body;
                const sqlQuery = 'INSERT INTO users (email, password) VALUES (?, ?);';
                const result = await pool.query(sqlQuery, [email, password]);
                res.status(200).json({ message: "Record created successfully" });
            } catch (error:any) {
                res.status(400).send(error.message);
            }
        });
        this.router.put("/update", async function(req:any,res:any){
            try {
                const { email, password,id } = req.body;

                const sqlQuery = 'UPDATE users SET email = ?, password = ? WHERE id = ?;';
                const result = await pool.query(sqlQuery, [email, password, id ]);
                res.status(200).json({ message: "Record updated successfully" });
            } catch (error:any) {
                res.status(400).send(error.message);
            }
        });
        this.router.delete("/delete", async function(req:any,res:any){
            try {
                const sqlQuery = 'DELETE FROM users WHERE id = ?;';
                const result = await pool.query(sqlQuery, req.body.id);
                res.status(200).json({ message: "Record deleted successfully" });
            } catch (error:any) {
                res.status(400).send(error.message);
            }
        });

    }
    }
