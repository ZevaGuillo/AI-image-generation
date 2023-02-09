import { Router } from "express";
import { check } from "express-validator";
import { createPost, getPosts } from "../controllers/post";
import { validate } from "../middlewares/validate";

const postRouter = Router();

postRouter.get('/', getPosts)

postRouter.post('/create',[
    check('prompt',"Prompt is required").not().isEmpty(),
    check('userid',"userid is required").not().isEmpty(),
    check('image',"image is required").not().isEmpty(),
    validate
], createPost)

export default postRouter