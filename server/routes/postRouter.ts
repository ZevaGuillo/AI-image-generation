import { Router } from "express";
import { createPost, getPosts } from "../controllers/post";

const postRouter = Router();

postRouter.get('/', getPosts)

postRouter.post('/create', createPost)

export default postRouter