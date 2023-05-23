import { Router } from "express";
import { getHistory, getUser } from "../controllers/user";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { validate } from "../middlewares/validate";

const userRouter = Router();

userRouter.get('/:slug', getUser)

userRouter.get('/history',[
    isAuthenticated,
    validate
],getHistory)

export default userRouter