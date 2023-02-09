import { Router } from "express";
import { check } from "express-validator";
import { generateImage } from "../controllers/generate";
import { validate } from "../middlewares/validate";

const generateRouter = Router();

generateRouter.post('/',[
    check('prompt',"Prompt is required").not().isEmpty(),
    validate
], generateImage)

export default generateRouter