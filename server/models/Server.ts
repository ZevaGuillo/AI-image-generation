import { Application } from "express"
import express from 'express';
import cors from 'cors';
import passport from 'passport'
import generateRouter from "../routes/generateRoute";
import PostRouter from "../routes/postRoute";
import { dbConnection } from "../database/config";
import userRouter from "../routes/userRouter";
import morgan from "morgan";
import helmet from "helmet";
import session from "express-session";
import '../helpers/passport'

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
        this.app.use(session({
            secret: `${process.env.COOKIE_SECRET}`,
            resave: true,
            saveUninitialized: true
        }))
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(cors({origin:'http://localhost:5173', credentials: true}));
        this.app.use(morgan('dev'));
        this.app.use(helmet());
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