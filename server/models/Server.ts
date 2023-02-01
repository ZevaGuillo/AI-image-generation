import { Application } from "express"
import express from 'express';
import cors from 'cors';
import generateRouter from "../routes/generateRoute";

class Server{
    private app: Application;
    private port: string;
    private paths = {
        generate: '/generate' 
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';

        this.middlewares();

        this.routes()

    }
    
    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }
    
    routes() {
        this.app.use(`/api/v1${this.paths.generate}`, generateRouter)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server run on port ${this.port}`);
            
        })
    }

}

export default Server