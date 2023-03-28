import { Router } from "express";
import passport from "passport";
import { loginFailed, loginSuccess, logout } from "../controllers/auth";

import * as dotenv from 'dotenv';
dotenv.config();

let clientURL: string = process.env.CLIENT_URL

const authRouter = Router();


authRouter.get('/login/success', loginSuccess)

authRouter.get('/login/failed', loginFailed)

authRouter.get("/google", passport.authenticate('google', ["profile", "email"] as any));

authRouter.get('/google/callback', passport.authenticate('google', {
  successRedirect: clientURL,
  failureRedirect: '/login/failed'
}))

authRouter.get("/facebook", passport.authenticate('facebook', { scope: 'email' }));

authRouter.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: clientURL,
  failureRedirect: '/login/failed'
}))

authRouter.get('/logout', logout)

export default authRouter;