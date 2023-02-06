import { Request, Response, Router } from "express";
import { check } from "express-validator";
import passport from "passport";
import { loginFailed, loginSuccess, logout } from "../controllers/auth";
import { validate } from '../middlewares/validate';

const authRouter = Router();


authRouter.get('/login/success',loginSuccess)

authRouter.get('/login/failed', loginFailed)

authRouter.get("/google", passport.authenticate('google', ["profile", "email"] as any));

authRouter.get('/google/callback', passport.authenticate('google', {
  successRedirect: 'http://localhost:5173',
  failureRedirect: '/login/failed'
}))

authRouter.get('/logout', logout)

export default authRouter;