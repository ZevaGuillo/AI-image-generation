import { Request, Response } from "express";

export const isAuthenticated = (req: Request, res: Response, next) => {
    console.log(req.isAuthenticated());
    
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(401).json({ error: 'Unauthorized puto' });
}