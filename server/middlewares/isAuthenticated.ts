import { Request, Response } from "express";

declare global {
    namespace Express {
      interface User {
        credits: number;
      }
    }
  }

export const isAuthenticated = (req: Request, res: Response, next) => {
    console.log(req.isAuthenticated());
    
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(401).json({ error: 'Unauthorized' });
}