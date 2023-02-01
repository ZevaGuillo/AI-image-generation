import { Router } from "express";
import { generateImage } from "../controllers/generate";

const generateRouter = Router();

generateRouter.post('/', generateImage)

export default generateRouter