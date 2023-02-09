import { Router } from "express";
import { getUser } from "../controllers/user";

const userRouter = Router();

userRouter.get('/:slug', getUser)



export default userRouter