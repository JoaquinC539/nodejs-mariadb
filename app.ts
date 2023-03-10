//Dependecies import
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path');
import { Router } from "./routes/routes";

//Define class
export class App{
    private port:number;
    private app:any=express();
    private router=new Router();
    private routes=this.router.router;

    constructor(port:number){
        this.port=port
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use(bodyParser.json());
        this.app.use("/api",this.routes);
    }
    public serverCreate(port:number){
        try{
            this.app.listen(port,()=>{
                console.log(`Listening request at port: ${port}` );
            });
        }catch(e){
            console.log("An error ocurred: "+e)
        }
        
    }

    }


