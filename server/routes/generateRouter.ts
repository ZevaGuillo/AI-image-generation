import { Router } from "express";
import { check } from "express-validator";
import { generateImage } from "../controllers/generate";
import { validate } from "../middlewares/validate";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const generateRouter = Router();

generateRouter.post('/',[
    isAuthenticated,
    check('prompt',"Prompt is required").not().isEmpty(),
    validate
], generateImage)

export default generateRouter