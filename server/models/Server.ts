import { Application } from "express"
import express from 'express';
import cors from 'cors';
import passport from 'passport'
import generateRouter from "../routes/generateRouter";
import postRouter from "../routes/postRouter";
import { dbConnection } from "../database/config";
import authRouter from "../routes/authRouter";
import morgan from "morgan";
import helmet from "helmet";
import session from "express-session";
import '../helpers/passport'
import userRouter from "../routes/userRoute";
import * as dotenv from 'dotenv';
dotenv.config();

let clientURL: string = process.env.CLIENT_URL


class Server {
    private app: Application;
    private port: string;
    private paths = {
        generate: '/generate',
        post: '/post',
        auth: '/auth',
        user: '/user',
    }

    constructor() {
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
            saveUninitialized: true,
            proxy: true, 
            name: 'MyCoolWebAppCookieName', 
            cookie: {
                secure: true, 
                httpOnly: true,
                sameSite: 'none'
            }
        }))
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
        this.app.use(morgan('dev'));
        this.app.use(helmet());

    }

    routes() {
        this.app.use(`/api/v1${this.paths.generate}`, generateRouter)
        this.app.use(`/api/v1${this.paths.post}`, postRouter)
        this.app.use(`/api/v1${this.paths.auth}`, authRouter)
        this.app.use(`/api/v1${this.paths.user}`, userRouter)
        this.app.get('/', (req, res) => {
            res.redirect(clientURL);
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server run on port ${this.port}`);

        })
    }

}

export default Server