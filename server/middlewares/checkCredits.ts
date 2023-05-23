import { Request, Response } from "express";
import User from "../models/mongo/User";




export const checkCredits = async (req: Request, res: Response, next) => {
    const userId = req.user['_id'];
    const user = await User.findById(userId);
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    if (user.credits < 1) {
      return res.status(400).json({ message: 'Insufficient credits' });
    }
  
    req.user = user;
  
    next();
  };

  