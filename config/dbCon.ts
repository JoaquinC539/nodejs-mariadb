const mariadb=require('mariadb');
require('dotenv').config({path:'.env'});
export class Connection{
  public pool:any = mariadb.createPool({
    host: process.env.DB_HOST, 
    port:process.env.DB_PORT,
    user:process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database:process.env.DB,
    connectionLimit: 5
  });
  constructor(){
    this.pool.getConnection((err:any,connection:any)=>{
      if(err){
        console.error("An error occured: "+err);
      }
      if(connection){
        connection.release();
        return;
      }
    });
  }
}
