import { Connection } from "../config/dbCon";
const db=new Connection();
const conn=db.pool;
export class Controller{
   async getUser(req:any,res:any){
    try{
        let sqlQuery='SELECT id,email,password,created_at FROM users WHERE id=?;';
        let rows=await conn.query(sqlQuery,req.params.id);
        res.status(200).json(rows);
    }catch(error:any){
        res.status(400).send(error.message)
    }
  }
  async  getAll (req:any, res:any) {
    try {
      const sqlQuery = "SELECT * FROM users;";
      const rows = await conn.query(sqlQuery);
      res.status(200).json(rows);
    } catch (e:any) {
  
      res.status(400).send(e.message);
    }
  }
   async newUser(req:any,res:any){
    try {
        const { email, password } = req.body;
        const sqlQuery = 'INSERT INTO users (email, password) VALUES (?, ?);';
        const result = await conn.query(sqlQuery, [email, password]);
        res.status(200).json({ message: "Record created successfully" });
    } catch (error:any) {
        res.status(400).send(error.message);
    }
  }
   async  editUser(req:any,res:any){
    try {
        const { email, password,id } = req.body;
  
        const sqlQuery = 'UPDATE users SET email = ?, password = ? WHERE id = ?;';
        const result = await conn.query(sqlQuery, [email, password, id ]);
        res.status(200).json({ message: "Record updated successfully" });
    } catch (error:any) {
        res.status(400).send(error.message);
    }
  }
  async  deleteUser(req:any,res:any){
    try {
        const sqlQuery = 'DELETE FROM users WHERE id = ?;';
        const result = await conn.query(sqlQuery, req.body.id);
        res.status(200).json({ message: "Record deleted successfully" });
    } catch (error:any) {
        res.status(400).send(error.message);
    }
  }
}




