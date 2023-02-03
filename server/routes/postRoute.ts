import { Router } from "express";
import { createPost, getPosts } from "../controllers/post";

const PostRouter = Router();

PostRouter.get('/', getPosts)

PostRouter.post('/create', createPost)

export default PostRouter