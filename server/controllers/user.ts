import { Request, Response } from "express";
import User from "../models/mongo/User";

export const getUser = async (req: Request, res: Response) => {
    const { slug } = req.params;
    
    try {
        const user = await User.find({ slug }).select('-history').populate('posts')
        
        return res.json({
            user
        })


    } catch (error) {
        return res.status(401).json({ msg: 'User not found' });
    }
}

export const getHistory = async (req: Request, res: Response) => {
    const userId = req.user['_id'];
    
    try {
        const user = await User.findById(userId);
        return res.status(200).json(user.history)
    } catch (error) {
        res.status(500).send('Something went wrong')
    }
}

