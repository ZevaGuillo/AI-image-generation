import { Router } from "express";
import { check } from "express-validator";
import { createUser, getUser, loginUser } from "../controllers/user";
import { validate } from '../middlewares/validate';

const userRouter = Router();

// get user
userRouter.get('/:username', getUser)

// create user
userRouter.post(
    "/new",
    [
        check("username", "Username is required").not().isEmpty(),
        check("email", "Email is required").isEmail(),
        check("password", "The password must be 6 characters").isLength({min: 6}),
        validate
    ],
    createUser
  );
  
  // login
  userRouter.post(
    "/",
    [
        check("email", "Email is required").isEmail(),
        check("password", "The password must be 6 characters").isLength({min: 6}),
        validate
    ],
    loginUser
  );
  
//   router.get("/renew", revalidateToken);

// router.post("/login",[
// ] , login );

// router.post("/google",[
// ] , googleSignIn );

export default userRouter;