import { Request, Response, Router } from "express";
import { check } from "express-validator";
import passport from "passport";
import { googleLogin } from "../controllers/user";
import { validate } from '../middlewares/validate';

const userRouter = Router();


userRouter.get('/login/success', (req: Request, res: Response) => {
  if (req.user) {
    res.status(200).json({ user: req.user });
  } else {
    res.status(401).json({ msg: 'Not Authorized' });
  }
})

userRouter.get('/login/failed', (req: Request, res: Response) => {

  res.status(401).json({ msg: 'Log in failure' });

})

userRouter.get("/google", passport.authenticate('google', ["profile", "email"] as any));

userRouter.get('/google/callback', passport.authenticate('google', {
  successRedirect: 'http://localhost:5173',
  failureRedirect: '/login/failed'
}))

userRouter.get('/logout', (req: Request, res: Response) => {
  req.logout({},(err:any)=>{
    if(err) return res.status(500).json({ msg: 'Something went wrong.' });
    res.redirect('http://localhost:5173')
  })

})

export default userRouter;