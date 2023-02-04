import { Application } from "express"
import express from 'express';
import cors from 'cors';
import generateRouter from "../routes/generateRoute";
import PostRouter from "../routes/postRoute";
import { dbConnection } from "../database/config";
import userRouter from "../routes/userRouter";

class Server{
    private app: Application;
    private port: string;
    private paths = {
        generate: '/generate', 
        post: '/post',
        auth: '/auth'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.DBConnection()

        this.middlewares();

        this.routes()

    }

    async DBConnection() {
        try {
            await dbConnection()
        } catch (error) {
            console.log(error);
        }
    }
    
    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }
    
    routes() {
        this.app.use(`/api/v1${this.paths.generate}`, generateRouter)
        this.app.use(`/api/v1${this.paths.post}`, PostRouter)
        this.app.use(`/api/v1${this.paths.auth}`, userRouter)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server run on port ${this.port}`);
            
        })
    }

}

export default Server