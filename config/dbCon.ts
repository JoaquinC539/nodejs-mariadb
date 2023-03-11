const mariadb=require('mariadb');
export class Connection{
  public pool:any = mariadb.createPool({
    host: 'localhost', 
    port:'3307',
    user:'root', 
    password: '123456',
    database:'usersdb',
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
