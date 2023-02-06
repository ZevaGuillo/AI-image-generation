import { Router } from "express";
import { getUser } from "../controllers/user";

const userRouter = Router();

userRouter.get('/:slug', getUser)

userRouter.post('/', )

export default userRouter