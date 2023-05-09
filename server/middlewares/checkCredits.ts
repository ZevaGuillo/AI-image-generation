import { Request, Response } from "express";
import User from "../models/mongo/User";




export const checkCredits = async (req: Request, res: Response, next) => {
    const userId = req.user['_id'];
    const user = await User.findById(userId);
  
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    if (user.credits < 1) {
      return res.status(400).json({ error: 'Insufficient credits' });
    }
  
    req.user = user;
  
    next();
  };

  