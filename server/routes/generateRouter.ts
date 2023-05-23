import { Router } from "express";
import { check } from "express-validator";
import { generateImage, verifyCredits } from "../controllers/generate";
import { validate } from "../middlewares/validate";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { checkCredits } from "../middlewares/checkCredits";

const generateRouter = Router();

generateRouter.post('/',[
    isAuthenticated,
    checkCredits,
    check('prompt',"Prompt is required").not().isEmpty(),
    validate
], generateImage)

generateRouter.get('/credits', [
    isAuthenticated,
    validate
], verifyCredits)

export default generateRouter